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

class Foo: public Console {
    public:
        void greet (String user) {
            this->out("Greetings " + user + "!");
        }
};

class Main {
    private:
        Console c;
        String user;
    public:
         Main () {
            this->user = "some user";
        }
        Int main () {
            Foo myClass;
            this->c.out("This is a program that has a Console property.");
            myClass.greet(this->user);
            return 0;
        }
};

int main () {
    Main main;
    return main.main();
}
