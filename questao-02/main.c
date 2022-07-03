#include <stdio.h>

int numero_pertence_fibonacci(long int numero);

int main() {

    long int numero;

    printf("Informe o numero para verificarmos se ele pertence a sequencia de fibonacci: ");
    scanf("%d", &numero);

    if(numero_pertence_fibonacci(numero))
        printf("\nNumero %ld pertence a sequencia de fibonacci.\n", numero);
    else
        printf("\nNumero %ld nao pertence a sequencia de fibonacci.\n", numero);

    return 0;
}

int numero_pertence_fibonacci(long int numero){
    long int ant = 0, atual = 1, proximo = 0;
    for(int i = 0; i < numero; ++i){
        proximo = ant + atual;
        ant = atual;
        printf("%ld ", atual);
        if(atual == numero)
            return 1;
        else
            if(atual > numero)
                return 0;
        atual = proximo;
    }
    return 0;
}