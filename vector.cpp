#include <iostream>
#include <vector>

using namespace std;

int main() {

 vector<int> v;

 for(int i = 0; i < 5; i++) {
     v.push_back(i);
 }

vector<int>::iterator iter;

 for(iter = v.begin(); iter != v.end(); iter++) {
     cout << "this is the value" << *iter << endl;
 }



}