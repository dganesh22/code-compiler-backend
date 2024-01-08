#include <stdio.h>
int main() {
    double a=12.2454, b=12.34, product=0;
 
 
    // Calculating product
    product = a * b;

    // %.2lf displays number up to 2 decimal point
    printf("Product = %.2lf", product);
    
    return 0;
}