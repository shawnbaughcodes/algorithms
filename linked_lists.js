// MIN SINGLY LINKED LISTS
class LinkedLists {
    LinkedList() {
        this.head = null;
    };
    node() {
        let node = {
            value: val,
            node: null
        }
    }
    LinkedList.prototype.sllength = function () {
        let runner = SL.head;
        let min = SL.head.val;
        while (runner) {
            if (runner.val < min) {
                min = runner.val;
            }
        }
        return min;
    };
}

sllength(1,2,3,4)
