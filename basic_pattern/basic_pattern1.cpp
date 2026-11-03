#include <iostream>
using namespace std;

// Pattern 1: 4 x 4 Star Square
void starSquare4()
{
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
}

// Pattern 2: n x n Star Square
void starSquareN()
{
    int num;
    cin >> num;

    for (int i = 0; i < num; i++)
    {
        for (int j = 0; j < num; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
}

// Pattern 3: Right Angle Triangle
void rightAngleTriangle()
{
    int rightangle;
    cin >> rightangle;

    for (int i = 0; i < rightangle; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            cout << "*";
        }
        cout << endl;
    }
}

// Pattern 4: Number Triangle
// 1
// 12
// 123
// 1234
// 12345
void numberTriangle()
{
    int num;
    cin >> num;

    for (int i = 1; i <= num; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << j;
        }
        cout << endl;
    }
}

// Pattern 5: Same Number Triangle
// 1
// 22
// 333
// 4444
// 55555
void sameNumberTriangle()
{
    int num;
    cin >> num;
    for (int i = 1; i <= num; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << i;
        }
        cout << endl;
    }
}

// pattern no 5 inverted star rightangle numberTriangle
// *****
// ****
// ***
// **
// *

void invertedStarRightangleTriangle()
{

    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i + 1; j++)
        {
            cout << "*";
        }
        cout << endl;
    }
}

// pattern no= 6
// 12345
// 1234
// 123
// 12
// 1

void invertedNumberTriangle()
{
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i + 1; j++)
        {
            cout << j;
        }
        cout << endl;
    }
}

// pattern no= 6
//    *
//   ***
//  *****
// *******
void triangle()
{

    for (int i = 0; i <= 5; i++)
    {
        for (int j = 1; j <= 5 - i; j++)
        {
            cout << " ";
        }
        for (int k = 0; k < 2 * i + 1; k++)
        {
            cout << "*";
        }

        for (int l = 1; l < 5 - i + 1; l++)
        {
            cout << " ";
        }

        cout << endl;
    }
}



// pattern no = 7
// *********
//  *******
//   *****
//    ***
//     *

void invertedtriangle()
{

    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= (i + 1) - 1; j++)
        {
            cout << " ";
        }
        for (int k = 0; k < 11 - 2 * i; k++)
        {
            cout << "*";
        }

        for (int l = 1; l < (i + 1) - 1; l++)
        {
            cout << " ";
        }

        cout << endl;
    }
}



//  pattern no = 8 ;
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

void starTriangle()
{
    triangle();
    invertedtriangle();
    
}

// pattern no = 9 ;

void p9(){

    int n = 5;
    for (int i = 0; i < 2*n - 1; i++)
    {
        int star = i;
        if(i>n) star = 2*n -i;
        for (int j = 0; j < star; j++)
        {
          cout<< "*";
        }
        cout<< endl;
    }
    
}



void p10(){
     int start = 1; 
     
     for (int i = 0; i < 5; i++)
     {
        if (i%2 == 0) start = 1;
     else start = 0;
      for (int j = 0; j <i; j++)
      {
        cout<<start;
        start = 1-start;
      }
      cout<< endl;
      
     }
     
     
}


void p11(){
    for (int i = 1; i <= 4; i++)
    {
      for (int j = 1; j <=i ; j++)
      {
        cout<< j;
    
      }
      for (int k = 0; k < 8-2*i; k++)
      {
        cout<<" ";
      }
      for (int l = i; l >=1; l--)
      {
        cout<<l;
      }
       cout<< endl;
      
    }
    
}

void p12(){
    int num = 1;
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i ; j++)
        {
            cout<< num;
            num++;
        }
        cout<< endl;
        
    }
    
}

void p13(){
    char ch = 'A';
    for (int i = 1; i <= 5; i++)
    {
        for (char ch = 'A'; ch<= 'A' + i ; ch++)
        {
            cout<< ch;
            
        }
        cout<< endl;
        
    }
    
}

void p14(){
    char ch = 'A';
    for (int i = 1; i <= 5; i++)
    {
        for (char ch = 'A'; ch<= 'A' + (5- i ); ch++)
        {
            cout<< ch;
            
        }
        cout<< endl;
        
    }
    
}
void p15(){
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            cout << char('A' + i);
        }

        cout << endl;
    }
}

void p16(){
    int n = 5;
    for (int i = 1; i <=5 ; i++)
    {
        for (int j = 0; j <= n-i; j++)
        {
            cout<< " ";
        }
        for (char ch  = 'A'; ch< 'A' + i; ch++)
        {
            cout<< ch;
        }
        for ( char ch1 = 'A'+ i -2; ch1 >= 'A'  ; ch1--)
        {
          cout<< ch1;  
        }
        for (int j = 0; j <= n-i; j++)
        {
            cout<< " ";
        } 
        cout<< endl;
    }  
}


void p17(){
 int n = 5;
 
 for (int i = 1; i <= n; i++)
 {
    for (char ch = 'A' + n-i; ch < 'A' + n ; ch++)
    {
        cout<< ch;
    }
    cout<< endl; 
 }
}

void p18(){
    int n = 5;
    for (int i = 1; i <= 5; i++)
    {
        for (int j =1 ; j <= n-i+1 ; j++)
        {
            cout<< "*";
        }

        for (int k = 1; k<= 2*i-2; k++)
        {
            cout<< " ";
        }
        for (int l =1 ; l <= n-i+1 ; l++)
        {
            cout<< "*";
        }
        
        cout<< endl;  
    } 
}

void p19(){
    int n = 5;
        for (int i = 1; i <= n; i++)
        {
           for (int j =1 ; j <= i ; j++)
        {
            cout<< "*";
        }
        for (int k = 1; k<= 2*n -2*i; k++)
        {
            cout<< " ";
        }
           for (int l =1 ; l <= i ; l++)
        {
            cout<< "*";
        }
        
        cout<<endl;
        }
        
        
    }

 void p21(){
    int n = 4;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n ; j++)
        {
            if( i == 1|| j == 1 ||j ==n || i==n){
            }else{
                cout<<" ";
            }
        }
        cout<< endl;
        
    }
    
 }
  

    void p20(){
    int n = 5;
    for (int i = 2; i <= 5; i++)
    {
        for (int j =1 ; j <= n-i+1 ; j++)
        {
            cout<< "*";
        }

        for (int k = 1; k<= 2*i-2; k++)
        {
            cout<< " ";
        }
        for (int l =1 ; l <= n-i+1 ; l++)
        {
            cout<< "*";
        }
        
        cout<< endl;  
    } 
}





int main()
{

    cout << "hello world" << endl;
    p21();
    

    return 0;
}