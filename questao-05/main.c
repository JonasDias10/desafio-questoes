#include <stdio.h>
#include <string.h>
#define MAX 100

int inverte_string(char *string);

int main() {

    char string[MAX];
    printf("Entre com a string a ser invertida: ");
    scanf(" %[^\n]", string);

    if(inverte_string(string))
        printf("\nString invertida com sucesso.\n");
    else
        printf("\nString de tamanho menor ou igual a 1.\n");

    printf("\nString invertida: %s\n", string);

    return 0;
}

int inverte_string(char *string){
    int tamanho = (int) strlen(string);
    if(tamanho <= 1)
        return 0;
    int meio = (int) tamanho/2;
    for(int i = 0, j = tamanho - 1; i < meio; ++i, --j){
        char auxiliar = string[j];
        string[j] = string[i];
        string[i] = auxiliar;
    }
    return 1;
}
