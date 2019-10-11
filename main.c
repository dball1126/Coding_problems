#include <stdio.h>
void decToBinary(int n)
{
    // array to store binary number
    int binaryNum[32];

    // counter for binary array
    int i = 0;
    while (n > 0)
    {
        // storing remainder in binary array
        binaryNum[i] = n % 2;
        n = n / 2;
        i++;
    }

    // printing binary array in reverse order
    for (int j = i - 1; j >= 0; j--)
        printf("%d", binaryNum[j]);
}

int main() {
    decToBinary(10);
    printf("\n");
    int x = 10;
    int z = 20;
    int y = x&z;
    printf(" %d \n", y);
    decToBinary(10);
    printf("\n");
    decToBinary(y);
    printf("\n");
}