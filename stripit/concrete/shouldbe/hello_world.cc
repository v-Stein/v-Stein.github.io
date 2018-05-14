#include <iostream>

typedef std::string String;
typedef int Int;
typedef char Char;

class Console {
    public:
        void out (String str) {
            std::cout << str + "\n";
        }
};

class Main: public Console {
    public:
        Int main () {
            const String hello = "Hello, World!";
            this->out(hello);
            return 0;
        }
};

int main () {
    Main main;
    return main.main();
}