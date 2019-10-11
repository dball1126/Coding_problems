#include <iostream>
#include <vector>
#include <algorithm>


using namespace std;

int Hindex(vector<int> cit) {
    sort(begin(cit), end(cit));
    const int n = cit.size();
    for (int i = 0; i < cit.size(); ++i) {
        // cout << n-i << endl;
        cout << cit[i] << endl; 
        // if(cit[i] >= n - i) {
        //     return n - i;
        // }
    }
    return 0;
}

int main() {
    vector<int> v = {2,4,4,5,9,11,4,6,8};
    int x = Hindex(v);
    // cout << x << endl; 
}