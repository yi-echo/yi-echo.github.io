import LinkedListNode from './LinkedListNode.js'
import Comparator from './Comparator.js'

export default class LinkedList {
  constructor(comparatorFunction) {
    // 头节点
    this.head = null
    // 尾节点
    this.tail = null
    // 链表长度
    this.length = 0
    // 比较器
    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * @description 在链表头部添加一个节点 时间复杂度O(1) 空间复杂度O(1) 头插法
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    // 创建新节点
    const newNode = new LinkedListNode(value, this.head)
    // 更新头节点
    this.head = newNode
    // 如果尾节点为空，则将新节点设置为尾节点
    if (!this.tail) {
      this.tail = newNode
    }
    // 返回链表
    return this
  }

  /**
   * @description 在链表尾部添加一个节点 时间复杂度O(1) 空间复杂度O(1) 尾插法
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    // 创建新节点
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      // 如果链表为空，则将新节点设置为头节点和尾节点
      this.head = newNode
      this.tail = newNode
    } else {
      // 如果链表不为空，则将新节点设置为尾节点
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    // 返回链表
    return this
  }

  /**
   * @description 在链表中插入一个节点 时间复杂度O(n) 空间复杂度O(1)
   * @param {*} value
   * @param {*} index
   * @return {LinkedList}
   */
  insert(value, index) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      return this.prepend(value)
    }
    if (index === this.length) {
      return this.append(value)
    }
    const newNode = new LinkedListNode(value)
    const prevNode = this.get(index - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++
    return this
  }
  insert2(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex
    if (index === 0) {
      this.prepend(value)
    } else {
      let count = 1
      let currentNode = this.head
      const newNode = new LinkedListNode(value)
      while (currentNode) {
        if (count === index) break
        currentNode = currentNode.next
        count += 1
      }
      if (currentNode) {
        newNode.next = currentNode.next
        currentNode.next = newNode
      } else {
        if (this.tail) {
          this.tail.next = newNode
          this.tail = newNode
        } else {
          this.head = newNode
          this.tail = newNode
        }
      }
    }
    return this
  }
  /**
   * @description 获取链表中指定位置的节点 时间复杂度O(n) 空间复杂度O(1)
   * @param {*} index
   * @return {LinkedListNode}
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    // 遍历到指定位置
    let current = this.head
    let count = 0
    // 遍历到指定位置
    while (count < index) {
      current = current.next
      count++
    }
    // 返回指定位置的节点
    return current
  }

  /**
   * @description 删除链表中指定位置的节点 时间复杂度O(n) 空间复杂度O(1)
   * @param {*} index
   * @return {LinkedListNode}
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    if (index === 0) {
      return this.deleteHead()
    }
    if (index === this.length - 1) {
      return this.deleteTail()
    }
    const prevNode = this.get(index - 1)
    const removedNode = prevNode.next
    prevNode.next = removedNode.next
    return removedNode
  }

  /**
   * @description 删除链表中指定位置的节点 时间复杂度O(n) 空间复杂度O(1)
   * @param {*} index
   * @return {LinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null
    }
    const removedNode = this.head
    this.head = removedNode.next
    return removedNode
  }

  /**
   * @description 删除链表中指定位置的节点 时间复杂度O(n) 空间复杂度O(1)
   * @param {*} index
   * @return {LinkedListNode}
   */
  deleteTail() {
    if (!this.tail) {
      return null
    }
  }

  find(value) {}
}
