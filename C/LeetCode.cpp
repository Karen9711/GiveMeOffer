#include "LeetCode.h"



LeetCode::LeetCode()
{
}


LeetCode::~LeetCode()
{
}


/*
0 I             1 -- V 和 X 特殊
1 V             5
2 X             10 -- L 和 C 特殊
3 L             50
4 C             100 -- D 和 M 特殊
5 D             500
6 M             1000
*/
/*
I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
*/
int LeetCode::romanToInt(string s) {
	//NOTE 利用词法分析器的double case 来写
	int sum = 0;
	int state = 0;
	int index = 0;

	while (index != s.length()) {
		char c = s.at(index);
		char next = 0;
		if (index < s.length() - 1) {
			next = s.at(index + 1);
		}
		switch (c) {
		case 'I':
			if (next == 'V') {
				sum += 4;
				index += 2;
			}
			else if (next == 'X') {
				sum += 9;
				index += 2;
			}
			else {
				sum += 1;
				index++;
			}
			break;
		case 'V':
			sum += 5;
			index++;
			break;
		case 'X':
			if (next == 'L') {
				sum += 40;
				index += 2;
			}
			else if (next == 'C') {
				sum += 90;
				index += 2;
			}
			else {
				sum += 10;
				index++;
			}
			break;
		case 'L':
			sum += 50;
			index++;
			break;
		case 'C':
			if (next == 'D') {
				sum += 400;
				index += 2;
			}
			else if (next == 'M') {
				sum += 900;
				index += 2;
			}
			else {
				sum += 100;
				index++;
			}
			break;
		case 'D':
			sum += 500;
			index++;
			break;
		case 'M':
			sum += 1000;
			index++;
			break;
		default:
			break;
		}
	}
	return sum;
}


string LeetCode::replaceSpace(string s) {
	string res;
	for (auto c : s) {
		if (c == ' ') {
			res += "%20";
		}
		else {
			res += c;
		}

	}
	return res;
}

void print(ListNode *head, vector<int> &res) {
	if (head == nullptr) {
		return;
	}

	print(head->next, res);
	res.push_back(head->val);
}
vector<int> LeetCode::reversePrint(ListNode* head) {
	//递归
	//vector<int> res;
	//print(head, res);
	//return res;

	//辅助栈
	/*stack<int> stack1;
	while (head != nullptr) {
		stack1.push(head->val);
		head = head->next;
	}

	vector<int> res;
	while (stack1.size() > 0) {
		res.push_back(stack1.top());
		stack1.pop();
	}

	return res;*/

	//翻转输出数组
	vector<int> res;
	while (head != nullptr) {
		res.push_back(head->val);
		head = head->next;
	}

	reverse(res.begin(), res.end());
	return res;
}

ListNode *rvs(ListNode * head) {
	if (head == nullptr || head->next == nullptr) {
		return;
	}

	ListNode *res = rvs(head->next);
	head->next->next = head;
	head->next = nullptr;
	return res;

}
ListNode * LeetCode::reverseList(ListNode * head)
{
	//1 - 双指针
	ListNode *pre = nullptr, *cur = head;
	while (cur != nullptr) {
		ListNode *temp = cur->next;
		cur->next = pre;
		pre = cur;
		cur = temp;
	}
	return pre;

	//2 - 递归
	return rvs(head);
}

Node* LeetCode::copyRandomList(Node* head)
{
	//哈希法
	unordered_map<Node*, Node*> myMap;
	Node* cur = head;
	//创建新旧节点映射的哈希表
	while (cur != nullptr) {
		Node* temp = new Node(cur->val);
		myMap[cur] = temp;
		cur = cur->next;
	}

	for (auto ele : myMap) {
		Node *old = ele.first;
		Node *newNode = ele.second;

		newNode->next = old->next == nullptr ? nullptr : myMap.at(old->next);
		newNode->random = old->random == nullptr ? nullptr : myMap.at(old->random);
	}

	return myMap.at(head);
}

string LeetCode::reverseLeftWords(string s, int n)
{
	//尝试翻转
	reverse(s.begin(), s.begin() + n);
	reverse(s.begin() + n, s.end());
	reverse(s.begin(), s.end());
	return s;
}

vector<int> LeetCode::maxSlidingWindow(vector<int>& nums, int k)
{
	vector<int> res;
	deque<int> d;
	if (nums.size() < k) return res;

	for (int i = 0; i < k; i++) {
		while (!d.empty() && d.back() < nums[i]) {
			d.pop_back();
		}
		d.push_back(nums[i]);
	}

	res.push_back(d.front());

	for (int j = k; j < nums.size(); j++) {

		if (d.front() == nums[j - k]) {
			d.pop_front();
		}
		while (!d.empty() && d.back() < nums[j]) {
			d.pop_back();
		}
		d.push_back(nums[j]);
		res.push_back(d.front());
	}

	return res;
}
