{
    //树节点的定义
    //Definition for a binary tree node.
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    /**
     * Definition for singly-linked list.
     * 单向链表
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */

    //剑指offer 04 二维数组中的查找
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    var findNumberIn2DArray = function (matrix, target) {
        //对每一行进行查找
        if (matrix.length == 0) return false;

        //二分查找
        let binarySearch = (nums, target) => {
            if (target > nums[nums.length - 1] || target < nums[0]) {
                return false;
            }
            console.log(nums);
            let left = 0, right = nums.length - 1;
            let mid = Math.floor((left + right) / 2);
            while (left < right) {
                if (nums[mid] > target) {
                    right = mid - 1;
                    mid = Math.floor((left + right) / 2);
                } else if (nums[mid] < target) {
                    left = mid + 1;
                    mid = Math.floor((left + right) / 2);
                } else {
                    return true;
                }
            }

            return nums[left] === target;
        }

        for (row of matrix) {
            if (binarySearch(row, target) === true) {
                return true;
            }
        }

        return false;
    };


    //TEST
    // findNumberIn2DArray([
    //     [1, 4, 7, 11, 15],
    //     [2, 5, 8, 12, 19],
    //     [3, 6, 9, 16, 22],
    //     [10, 13, 14, 17, 24],
    //     [18, 21, 23, 26, 30]
    // ], 5);

    //方法一 - 自己最初的思路 - 对于每一行进行一次二分查找，这里的时间复杂度大概是O(MlogN)

    //方法二 - 大佬的方法 - 使用标志数 - 将矩阵进行旋转以后发现其类似于二叉搜索树 - 绝了


    //数据结构
    //剑指offer 05 替换空格
    /**
     * @param {string} s
     * @return {string}
     */
    var replaceSpace = function (s) {
        let arr = new Array();
        for (c of s) {
            if (c === ' ') {
                arr.push("%20");
            } else {
                arr.push(c);
            }
        }

        return arr.join("");
    };

    //剑指offer 06 从尾到头打印链表
    /**
     * @param {ListNode} head
     * @return {number[]}
     */
    var reversePrint = function (head) {
        //1、递归
        // let res1 = new Array();
        // let print = (head) => {
        //     if (head === null) {
        //         return;
        //     }

        //     print(head.next);
        //     res1.push(head.val);
        // }
        // console.log(res1);
        // return res1;

        //2、看输出其实可以走个捷径顺向遍历然后翻转数组
        let res2 = new Array();
        while (head != null) {
            res2.push(head.val);
            head = head.next;
        }
        return res2.reverse();

        //3、压栈后弹出

    };

    //剑指offer - 09 - 两个栈实现队列 - done
    var CQueue = function () {
        this.stack1 = new Array();
        this.stack2 = new Array();
    };

    /** 
     * @param {number} value
     * @return {void}
     */
    CQueue.prototype.appendTail = function (value) {
        this.stack1.push(value);
    };

    /**
     * @return {number}
     */
    CQueue.prototype.deleteHead = function () {
        let res = 0;
        if (this.stack2.length > 0) return this.stack2.pop();
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }

        res = this.stack2.length > 0 ? this.stack2.pop() : -1;

        //不需要倒回去 - 如果stack2不为空直接弹出其栈顶元素
        // while (this.stack2.length > 0) {
        //     this.stack1.push(this.stack2.pop());
        // }

        return res;
    };

    //剑指offer - 20 表示字符的字符串

    //剑指offer - 24  反转链表
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    var reverseList = function (head) {
        //方法一 顺次遍历
        // let pre = null,cur = head;
        // while(cur!=null){
        //     let temp = cur.next;
        //     cur.next = pre;
        //     pre = cur;
        //     cur = temp;
        // }
        // return pre;

        //方法二 递归
        let rvs = (head) => {
            if (head === null || head.next === null) {
                return head;
            }

            let ret = rvs(head.next);
            head.next.next = head;
            head.next = null;
            return ret;
        }

        let res = rvs(head);
        return res;
    };

    //30
    /**
     * initialize your data structure here.
     */
    var MinStack = function () {
        this.stack1 = new Array();
        this.stack2 = new Array();
        this.minValue = Infinity;
    };

    /** 
     * @param {number} x
     * @return {void}
     */
    MinStack.prototype.push = function (x) {
        this.stack1.push(x);
        this.minValue = Math.min(this.minValue, x);
        this.stack2.push(this.minValue);
    };

    /**
     * @return {void}
     */
    MinStack.prototype.pop = function () {
        this.stack1.pop();
        this.stack2.pop();
        this.minValue = stack2[this.stack2.length - 1];
    };

    /**
     * @return {number}
     */
    MinStack.prototype.top = function () {
        return this.stack1[this.stack1.length - 1];
    };

    /**
     * @return {number}
     */
    MinStack.prototype.min = function () {
        return this.stack2[this.stack2.length - 1];
    };


    //剑指offer - 35 复杂链表的复制
    /**
     * // Definition for a Node.
     * function Node(val, next, random) {
     *    this.val = val;
     *    this.next = next;
     *    this.random = random;
     * };
     */

    /**
     * @param {Node} head
     * @return {Node}
     */
    var copyRandomList = function (head) {
        //字典映射 - 绝绝子 原来字典可以这么用的
        // let lMap = new Map();
        // let tempHead = head;
        // while (tempHead != null) {
        //     let temp = new Node(tempHead.val, null, null);
        //     lMap.set(tempHead, temp);
        //     tempHead = tempHead.next;
        // }

        // for (ele of lMap.entries()) {
        //     let old = ele[0];
        //     let newNode = ele[1];

        //     newNode.next = old.next === null ? null : lMap.get(old.next);
        //     newNode.random = old.random === null ? null : lMap.get(old.random);
        // }

        // return lMap.get(head);

        //另一个方法 - 合并+拆解 - 是底下这么个流程但是好难写条件所以放一会
        //node1 - node1_new - node2 - node2_new......
        //先创建新的链表
        let pre = head;
        let cur = head;
        while (cur != null) {
            let node_new = new Node(cur.val, null, null);
            node_new.next = cur.next;
            cur.next = node_new;
            cur = cur.next.next;
        }
        //构造random
        pre = head;
        cur = head.next;
        while (cur != null && cur.next != null) {
            cur.random = pre.random === null ? null : pre.random.next;
            pre = cur.next;
            cur = pre.next;
        }
        //对新的链表进行处理（构造连接）
        pre = head;
        cur = head.next;
        let newHead = head.next;
        while (cur != null && cur.next != null) {
            pre.next = cur.next;
            cur.next = pre.next.next;
        }

        return newHead;
    };

    //剑指offer - 58 左旋转字符串
    /**
     * @param {string} s
     * @param {number} n
     * @return {string}
     */
    var reverseLeftWords = function (s, n) {
        //通过额外空间、多次旋转、切片拼接等
        let pos = s.length - n;
        let s1 = s.slice(n);
        let s2 = s.slice(0, n);
        return s1 + s2;

    };
    // reverseLeftWords("abcdefg",2);

    //剑指offer - 59 滑动窗口最大值
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    var maxSlidingWindow = function (nums, k) {
        let deque = new Array();
        let res = [];
        for (let i = 0; i < k; i++) {
            while (deque.length > 0 && nums[i] > deque[deque.length-1]) {
                deque.pop();
            }
            deque.push(nums[i]);
        }
        res.push(deque[0]);
        console.log(deque);
        for (let j = k; j < nums.length; j++) {
            let i = j - k;
            if(nums[i]===deque[0]){
                deque.shift();//移动窗口时删除上一个窗口最边缘的值
            }
            
            while(deque.length > 0 && nums[j] > deque[deque.length-1]){
                deque.pop();
            }
            deque.push(nums[j]);
            res.push(deque[0]);
        }
        return res;
    };

    // maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
    // maxSlidingWindow([1,-1],1);
    // maxSlidingWindow([1,3,1,2,0,5],3);

    //67
}


{
    //动态规划
    // 10-1
    // 10-2
    //19
    //42
    //46
}