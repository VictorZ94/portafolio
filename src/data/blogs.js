import BlogImagePython from "../assets/blog/mutable.png"
import BlogImageShell from "../assets/blog/shell.webp"
import BlogImageIot from "../assets/blog/iot.webp"

const blogPost = [
    {
        blogId: "71441c11-529c-4192-b6a8-8a0c4771625d",
        title: "Internet of Things (IoT)",
        content: "So IoT is one of the most important technologies of the Fourth Industrial Revolution. It occurs when any object is connected to the internet and through sensors, it is given the power to interpret sensations from the environment to transfer data through a network...",
        publishedDate: "Jan 2, 2021",
        blogImge: BlogImageIot,
        url: "https://1484.medium.com/internet-of-things-15e861802582"
    },
    {
        blogId: "2ebde11c-cfa4-4924-b013-007033925f58",
        title: "Everything is an object… Mutable or Immutable.",
        content: "This post we’ll do a deep dive in the concept “objects”, especially in python, we’ll learn a little bit more about data structure in Python like tuple(), list[], dict{}, and the main object like int(), str(), float(), etc.",
        publishedDate: "Sep 29, 2020",
        blogImge: BlogImagePython,
        url: "https://medium.com/@1484/everything-is-an-object-mutable-or-immutable-44f6b2fa827e"
    },
    {
        blogId: "71441c11-529c-4192-b6a8-8a0c4771625d",
        title: "What happens when you type ls *.c",
        content: "When we’re working in console or terminal (OS Linux or Unix-Like) it’s almost necessary to input a command to list files, the command is “ls”. it is an alias (used to rename commands) of list sort...",
        publishedDate: "Jun 8, 2020",
        blogImge: BlogImageShell,
        url: "https://1484.medium.com/what-happens-when-you-type-ls-c-6b37612b94a8"
    }
]

export default blogPost;
