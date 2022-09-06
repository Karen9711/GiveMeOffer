#pragma once

#include<Windows.h>
#include<iostream>

#include<vector>
#include<string>
#include<map>
#include<queue>
#include<deque>
#include<set>
#include<algorithm>
#include<fstream>


using namespace std;
struct ListNode {
	int val;
	ListNode *next;
	ListNode(int x) : val(x), next(NULL) {}
};

struct Node {
	int val;
	Node *next;
	Node *random;
	Node(int _val) {
		val = _val;
		next = NULL;
		random = NULL;	
	}
};