function reorder(list, startIndex, endIndex) {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);

    list.forEach((item, index) => {
        item.listIndex = index;
    });
}

function move(src, dest, srcIndex, destIndex) {
    const [removed] = src.splice(srcIndex, 1);
    dest.splice(destIndex, 0, removed);

    src.forEach((item, index) => {
        item.listIndex = index;
    });

    dest.forEach((item, index) => {
        item.listIndex = index;
    });
}

export default function taskItemMoved(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
        return;
    }

    // dropped same place
    if (source.droppableId === destination.droppableId
        && source.index === destination.index) {
        return;
    }

    const src = this.findList(source.droppableId);

    if (source.droppableId === destination.droppableId) {
        reorder(src.items, source.index, destination.index);
    } else {
        const dest = this.findList(destination.droppableId);

        move(src.items, dest.items, source.index, destination.index);
    }

    this.forceUpdate();
}
