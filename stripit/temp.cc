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

#include <iostream>

typedef std::string String;
typedef int Int;
typedef char Char;

class Greeter {
    public:
        String user;
         Greeter (String user) {
            this->user = user;
        }
        String greetUser () {
            String greetings = "Greetings " + this->user + "!";
            return greetings;
        }
};

int main () {
    Main main;
    return main.main();
}


class Main: public Console {
    private:
        Greeter greeter;
    public:
        const String greet = "foo";
        Int main () {
            const String hello = "Hello, World!";
            this->greeter = new Greeter("Tripes");
            this->out(this->greeter.greetUser("Tripes"));
            return 0;
        }
};

int main () {
    Main main;
    return main.main();
}
