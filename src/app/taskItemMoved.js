function reorder(list, startIndex, endIndex, update) {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);

    list.forEach(update);
}

function move(src, dest, srcIndex, destIndex, update) {
    const [removed] = src.splice(srcIndex, 1);
    dest.splice(destIndex, 0, removed);

    src.forEach(update);
    dest.forEach(update);
}

function updateItem(item, index) {
    item.listIndex = index;
}

function updateList(list, index) {
    list.columnIndex = index;
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
        reorder(this.props.data.lists, source.index, destination.index, updateList);
        return;
    }

    const src = this.findList(source.droppableId);

    if (source.droppableId === destination.droppableId) {
        reorder(src.items, source.index, destination.index, updateItem);
    } else {
        const dest = this.findList(destination.droppableId);

        move(src.items, dest.items, source.index, destination.index, updateItem);
    }

    this.forceUpdate();
}
