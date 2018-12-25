import { updateItem, updateList } from '../update';
import { extractProps } from '../utils';

function reorder(list, startIndex, endIndex, assign) {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);

    list.forEach(assign);
}

function move(src, dest, srcIndex, destIndex, srcAssign, destAssign) {
    const [removed] = src.splice(srcIndex, 1);
    dest.splice(destIndex, 0, removed);

    src.forEach(srcAssign);
    dest.forEach(destAssign);
}

// TODO: also update the listId

const assignItem = (listId) => function(item, index) {
    item.listIndex = index;
    item.listId = listId;

    console.log(item);

    updateItem(extractProps(
        ['_id', 'listId', 'boardId', 'listIndex'],
        item
    ));
}

function assignList(list, index) {
    list.columnIndex = index;

    updateList(extractProps(
        ['_id', 'boardId', 'columnIndex'],
        list
    ));
}

function getIntId(id) {
    return id.substring(id.indexOf("\\") + 1);
}

export default function taskItemMoved(result) {
    const { source, destination, type } = result;

    // dropped outside the list
    if (!destination) {
        return;
    }

    // dropped same place
    if (source.droppableId === destination.droppableId
        && source.index === destination.index) {
        return;
    }

    // if moving columns
    if (type === 'LIST') {
        reorder(this.props.data.lists, source.index, destination.index, assignList);
        return;
    }

    const srcId = getIntId(source.droppableId);
    const destId = getIntId(destination.droppableId);

    const src = this.findList(srcId);
    const srcAssign = assignItem(srcId);

    if (srcId === destId) {
        reorder(src.items, source.index, destination.index, srcAssign);
    } else {
        const dest = this.findList(destId);
        const destAssign = assignItem(destId);

        move(src.items, dest.items, source.index, destination.index, srcAssign, destAssign);
    }

    this.forceUpdate();
}
