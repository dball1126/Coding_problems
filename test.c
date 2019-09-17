#include <stdio.h>

struct Node {
    int x;
    int y;
    int z;
};

int main() {
    struct Node node;
    // node[10];
    // for(int i = 0; i < 10; i++) {
    //     node[i].x = i;
    //     node[i].y = i + 1;
    // }
    int arr[3] = {1,2,3};
    node.x = 5;
    node.y = 10;
    node.z = 15;
    printf("%p\n", &node.x);
    printf("%p\n", &node.y);
    printf("%p\n", &node.z);
    printf("%p\n", &arr[0]);
    printf("%p\n", &arr[1]);
    printf("%p\n", &arr[2]);
}