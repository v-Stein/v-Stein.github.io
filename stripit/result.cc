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

class Main: public Console{
    private:
        String greetUser (String user) {
             String greetings ="Greetings " + user + "!";
            return greetings;
        }
    public:
        const String greet = "foo";
        Int main () {
            const String hello ="Hello, World!";
            this->out ( this->greetUser ( "Tripes" ) );
            return 0;
        }
};

class Foo: public Main{
};

int main () {
    Main main;
    return main.main();
}
