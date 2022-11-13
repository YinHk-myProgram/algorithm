const isValid = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        switch(ch) {
            case '(': stack.push(')');
            break;
            case '[': stack.push(']');
            break;
            case '{': stack.push('}');
            break;
            default: 
                if(stack.pop() !== ch) {
                    return false;
                }
        }
    }

    return stack.length === 0;
};

//or 
var isValid = function(s) {
    var charStack = []
    for(var i of s){
        switch(i){
            case "(":
                charStack.push(")");
                break;
            case "{":
                charStack.push("}");
                break;
            case "[":
                charStack.push("]");
                break;
            case ")":
                if(charStack.pop() != i){
                    return false;
                }
                break;
            case "}":
                if(charStack.pop() != i){
                    return false;
                }
                break;
            case "]":
                if(charStack.pop() != i){
                    return false;
                }
                break;
        }
    }
    if(charStack.length > 0){
        return false;
    }
    return true;
};




//or my solution

var isValid = function(s) {
    let arr = [];
    for(let i=0;i<=s.length-1;i++){
      if(s[i]=='('){
        arr.push('(');
      }else if(s[i]=='{'){
        arr.push('{'); 
      }else if(s[i]=='['){
        arr.push('[');     
      }else if(s[i]==')'){
        let x = arr.pop();
        if(x!='('){
          return false;
          break;
        }     
      }else if(s[i]=='}'){
        let x = arr.pop();
        if(x!='{'){
          return false;
          break;
        }     
      }else if(s[i]==']'){
        let x = arr.pop();
        if(x!='['){
          return false;
          break;
        }     
      }
    }
    if(arr.length==0)
      return true
    else return false
};
