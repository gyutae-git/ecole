#include <stdio.h>
 
int main(void){
    int N;
    scanf("%d", &N);
 
    int counting[10001];
    for(int i=0; i<10001; i++){
        counting[i] = 0;
    }
 
    for(int i=0; i<N; i++){
        int input;
        scanf("%d", &input);
        counting[input]++;
    }
 
    for(int i=0; i<10001; i++){
        for(int j=0; j<counting[i]; j++){   
            printf("%d\n", i);
        }
    }
}