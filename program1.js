/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}

let stack = new Stack();

    for(let i=0;i<s.lenght;i++)
        {
             if(s[i]=='('||s[i]=='{'||s[i]=='[')
            {
                stack.add(s[i]);
            }
            else 
            {
                if(!stack.isEmpty()&&s[i]=="("&&stack.peek()==')')
                {
                    stack.remove();
                }
                 else if(!stack.isEmpty()&&s[i]=='{'&&stack.peek()=='}')
                {
                    stack.remove();
                }
                else if(!stack.isEmpty()&&s[i]=='['&&stack.peek()==']')
                {
                    stack.remove();
                }
                else 0;
            }


            if(stack.empty())return 1;
            return 0;
            
        }


    
    
};

module.exports = { isValid };


