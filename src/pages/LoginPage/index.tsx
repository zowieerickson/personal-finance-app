import styles from './LoginPage.module.css'

export default function LoginPage() {

    // Recursive Example
    function fn(i: number) {
        if (i > 3) {
            console.log("Finished!")
            return
        }

        console.log(i)
        fn(i + 1)
        console.log(`End of call where i = ${i}`)
        return
    }

    fn(1) 
    // End of Recursive Example

    // Higher-Order Function Example
    function copyArrayAndManipulate(arr: number[], instructions) {
        let output = [];

        for (let i = 0; i < arr.length; i++) {
            output.push(instructions(arr[i]))
        }

        return output
    }

    function multiplyByTwo(number: number) {
        return number * 2
    }

    let myArray = [1, 2, 3]

    // copyArrayAndManipulate(myArray, multiplyByTwo)
    // End of Higher-Order Function Example

    // Closure Example
    function outer() {
        let counter = 0;
        let marksCounter = 7; // not used, will be garbage collected
        console.log('marksCounter:', marksCounter)


        function incrementByOne() {
            counter++
            console.log('OG counter', counter)
        }
        return incrementByOne
    }

    // const randomFunc = outer()
    // const randomFunc2 = outer()

    // randomFunc()
    // randomFunc()
    // randomFunc()

    // randomFunc2()


    return (
        <div className={styles.login}>
            <h1>This is the login page!</h1>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <div className={styles.loginBox}>
                <form>
                    <h2>Login</h2>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" required></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" required></input>
                    </div>
                </form>
            </div>
        </div>
    );
}