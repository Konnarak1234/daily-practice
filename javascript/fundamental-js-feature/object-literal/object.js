

const blogs = [
    {title: 'First adventure!', like: '20'},
    {title: 'Fantasy Village', like: '50'}
]


let user = {
    name: 'kunnarak',
    age: '30',
    blogs: blogs,
    
    // first way of defining method in object-literal
    authorBlogs() {
        console.log('I am the author of: ');
        this.blogs.forEach(blog => console.log(blog.title));
    },

    // first way of defining method in object-literal
    greeting: function() {
        console.log(`Hello my name is ${this.name}, I am ${this.age}.`)
    }

    // note : avoid using arrow function () => {} in object literal
    // because when we work with "this" keyword, js will reference "this" to window object, instead of our defined object-literal
}


user.authorBlogs();
user.greeting();