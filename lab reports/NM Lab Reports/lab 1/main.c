//1.1Non linear equation using bisection method

//#include <stdio.h>
//#include <math.h>
//#include <conio.h>
//#define EPS 0.00001
//
//float f(float x)
//{
//
//     return exp(x) - x - 2;
//    return sin(x)-2*x+1;
//    return 2*x+3*cos(x)-exp(x);
//}
//
//int main()
//{
//    system("color f0");
//    float a, b, c;
//    int n = 0;
//    do
//    {
//        printf("Enter two initial points a and b: ");
//        scanf("%f%f", &a, &b);
//    } while (f(a) * f(b) >= 0);
//
//    do
//    {
//        n++;
//        c = (a + b) / 2;
//        if (f(c) == 0)
//            break;
//        if (f(a) * f(c) < 0)
//            b = c;
//        else
//            a = c;
//    }
//
//    while (fabs((b - a) / a) > EPS);
//    printf("The approximate root  is %f with %d iterations.", c, n);
//    getch();
//    return 0;
//}



// 1/2.Non linear eqn using Secant method.
//
//#include <stdio.h>
//#include <math.h>
//#include <conio.h>
//#define EPS 0.00001
//
//float f(float x)
//{
//    // return x * x * x - 3 * x + 1;
//    // return x*x*x -2*sin(x);
//    return 3*x+sin(x)-exp(x);
//}
//
//int main()
//{
//
//    float x0, x1, x2;
//    int n = 0;
//    do
//    {
//
//        printf("Enter two  initial points x0 & x1 : ");
//        scanf("%f%f", &x0, &x1);
//    } while (f(x0) == f(x1));
//
//    do
//    {
//        n++;
//        x2 = (x0 * f(x1) - x1 * f(x0)) / (f(x1) - f(x0));
//        if (f(x2) == 0)
//            break;
//        x0 = x1;
//        x1 = x2;
//    } while (fabs((x1 - x0) / x1) > EPS);
//    printf("The approximate root  is %f with %d  iterations.", x2, n);
//    getch();
//    return 0;
//}



//1/3.Newton Raphson Method.c


//#include <stdio.h>
//#include <math.h>
//#include <conio.h>
//#define EPS 0.00001
//
//float f(float x)
//{
//    //return x*exp(x)-1;
//   //return  x*x*x+x*x-3*x-3;
//   return 3*x+sin(x)-exp(x);
//}
//float fd(float x)
//{
//    //return 2*exp(x);
//    //return 3*x*x+2*x-3;
//    return 3+cos(x)-exp(x);
//}
//
//int main()
//{
//    float x0, x1;
//    int n = 1;
//    do
//    {
//        printf("Enter a valid initial point x0 :");
//        scanf("%f", &x0);
//    } while (fd(x0) == 0);
//    x1 = x0 - (f(x0) / fd(x0));
//    while (fabs((x1 - x0) / x1) > EPS)
//    {
//        n++;
//        x0 = x1;
//        x1 = x0 - (f(x0) / fd(x0));
//        if (f(x1) == 0)
//            break;
//    }
//    printf("The approximate root  is %f with %d  iterations.", x1, n);
//    getch();
//    return 0;
//}



// 1/4.Horner's Method OR Synthetic Division method.c

//#include <stdio.h>
//#include <math.h>
//#include<conio.h>
//#define EPS 0.00001
//void horner(int n, float a[], float x0, float p[])
//{
//    int i;
//    p[0] = a[n], p[1] = a[n];
//    for (i = n - 1; i >= 1; i--)
//    {
//        p[0] = a[i] + p[0] * x0;
//        p[1] = p[0] + p[1] * x0;
//    }
//    p[0] = a[0] + p[0] * x0;
//}
//int main()
//{
//    float a[10], p[2], x0, x1;
//    // p[0] and p[1] stores the value of the polynomial and its derivative at x0 respectively
//    int i, n, count = 1;
//    printf("Enter the degree of the polynomial : ");
//    scanf("%d", &n);
//    printf("\nEnter the coefficients of the polynomial starting from the hightest degree: ");
//    for (i = n; i >= 0; i--)
//        scanf("%f", &a[i]);
//    printf("Enter an initial point x0 : ");
//    scanf("%f", &x0);
//
//    horner(n, a, x0, p);
//    x1 = x0 - (p[0] / p[1]);
//    while (fabs((x1 - x0) / x1) > EPS)
//    {
//        count++;
//        x0 = x1;
//        horner(n, a, x0, p);
//        x1 = x0 - (p[0] / p[1]);
//    }
//    printf("\n The approximate root is %f with %d iterations.", x1, count);
//     getch();
//    return 0;
//}



//1/5.Fixed point method.c


#include <stdio.h>
#include <math.h>
#include <conio.h>
#define EPS 0.00001

float g(float x)
{
   // return (cos(x)+3)/2;
   //return (7 + log10(x)) / 2;
     return 1 / sin(x);
}

int main()
{
    float x0, x1;
    int n = 1;
    printf("Enter an initial point x0 : ");
    scanf("%f", &x0);
    x1 = g(x0);
    while (fabs((x1 - x0) / x1) > EPS)
    {
        n++;
        x0 = x1;
        x1 = g(x0);
        if (g(x1) == x1)
            break;
    }

    printf("The approximate root  is %f with %d  iterations.", x1, n);
     getch();
    return 0;
}



