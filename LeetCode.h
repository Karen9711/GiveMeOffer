#pragma once
#include<Windows.h>
#include<iostream>

#include<vector>
#include<string>
#include<map>
#include<unordered_map>
#include<queue>
#include<deque>
#include<set>

#include<stack>
#include<algorithm>
#include<fstream>

//定义了最值宏的头文件
#include<limits>

#include"DataStructure.h"
using namespace std;

class LeetCode
{
public:
	LeetCode();
	~LeetCode();

	int romanToInt(string s);
	//数据结构
	//剑指offer - 05
	string replaceSpace(string s);
	//剑指offer - 06
	vector<int> reversePrint(ListNode* head);
	//剑指offer - 24
	ListNode* reverseList(ListNode* head);
	//剑指offer - 35 
	Node* copyRandomList(Node* head);
	//剑指offer - 58
	string reverseLeftWords(string s, int n);
	//剑指offer - 59
	vector<int> maxSlidingWindow(vector<int>& nums, int k);
	}
};


//剑指offer - 09 两个栈实现队列
class CQueue {
public:
	CQueue() {

	}

	void appendTail(int value) {
		s1.push(value);
	}

	int deleteHead() {
		int res = -1;
		if (s2.size() > 0) {
			res = s2.top();
			s2.pop();
			return res;
		}
		else if (s2.size()==0 && s1.size() == 0) {
			return -1;
		}

		while (s1.size() > 0) {
			int temp = s1.top();
			s2.push(temp);
			s1.pop();
		}

		res = s2.top();
		s2.pop();
		return res;
		
	}
public:
	stack<int> s1;
	stack<int> s2;
};

//剑指offer - 30
class MinStack {
public:
	stack<int> stack1;
	stack<int> stack2;
	int minValue;
public:
	/** initialize your data structure here. */
	MinStack() {
		stack2.push(INT_MAX);
		minValue = INT_MAX;
	}

	void push(int x) {
		stack1.push(x);
		minValue = minValue > x ? x : minValue;
		stack2.push(minValue);
	}

	void pop() {
		stack2.pop();
		stack1.pop();
		minValue = stack2.top();
	}

	int top() {
		return stack1.top();
	}

	int minVal() {
		return minValue;
	}


};