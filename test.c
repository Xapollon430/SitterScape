#include <stdio.h>
#include <stdlib.h>
void anan(struct Node s);
struct Node {
   int i;
   struct Node *next;
};

int main() {
 struct Node x;
 struct Node y;

 y.i=1;

 anan(y);
 printf("%d", y.i);
 return 1; 
}

void anan(struct Node s){
    s.i = 10;
}