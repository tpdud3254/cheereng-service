// const list = [
//     {
//         img: "/assets/images/main/gallary/1.jpg",
//         title: "1",
//     },
//     {
//         img: "/assets/images/main/gallary/2.jpg",
//         title: "2",
//     },
//     {
//         img: "/assets/images/main/gallary/3.jpg",
//         title: "3",
//     },
//     {
//         img: "/assets/images/main/gallary/4.jpg",
//         title: "4",
//     },
//     {
//         img: "/assets/images/main/gallary/5.jpg",
//         title: "5",
//     },
//     {
//         img: "/assets/images/main/gallary/6.jpg",
//         title: "6",
//     },
//     {
//         img: "/assets/images/main/gallary/7.jpg",
//         title: "7",
//     },
//     {
//         img: "/assets/images/main/gallary/8.jpg",
//         title: "8",
//     },
//     {
//         img: "/assets/images/main/gallary/9.jpg",
//         title: "9",
//     },
//     {
//         img: "/assets/images/main/gallary/10.jpg",
//         title: "10",
//     },
//     {
//         img: "/assets/images/main/gallary/11.jpg",
//         title: "11",
//     },
//     {
//         img: "/assets/images/main/gallary/12.jpg",
//         title: "12",
//     },
//     {
//         img: "/assets/images/main/gallary/13.jpg",
//         title: "13",
//     },
//     {
//         img: "/assets/images/main/gallary/14.jpg",
//         title: "14",
//     },
//     {
//         img: "/assets/images/main/gallary/15.jpg",
//         title: "15",
//     },
// ];

export const imgList = [
    {
        img: "/assets/images/main/gallary/6.jpg",
        title: "6",
    },
    {
        img: "/assets/images/main/gallary/7.jpg",
        title: "7",
    },
    {
        img: "/assets/images/main/gallary/2.jpg",
        title: "2",
    },
    {
        img: "/assets/images/main/gallary/4.jpg",
        title: "4",
    },
    {
        img: "/assets/images/main/gallary/1.jpg",
        title: "1",
    },
    {
        img: "/assets/images/main/gallary/9.jpg",
        title: "9",
    },
    {
        img: "/assets/images/main/gallary/5.jpg",
        title: "5",
    },
    {
        img: "/assets/images/main/gallary/8.jpg",
        title: "8",
    },
    {
        img: "/assets/images/main/gallary/3.jpg",
        title: "3",
    },
];

export const mobileImgList = [
    {
        img: "/assets/images/main/gallary/10.jpg",
        title: "10",
    },
    {
        img: "/assets/images/main/gallary/13.jpg",
        title: "13",
    },
    {
        img: "/assets/images/main/gallary/11.jpg",
        title: "11",
    },
    {
        img: "/assets/images/main/gallary/12.jpg",
        title: "12",
    },
    {
        img: "/assets/images/main/gallary/14.jpg",
        title: "14",
    },
    {
        img: "/assets/images/main/gallary/15.jpg",
        title: "15",
    },
];

// function imageList() {
//     const arr = [];
//     const number = Math.floor(Math.random() * 15);
//     arr.push(number);

//     for (let i = 1; i < 9; i++) {
//         let loop = true;

//         while (loop) {
//             const number = Math.floor(Math.random() * 15);
//             let same = false;
//             arr.forEach((e) => {
//                 if (e == number) {
//                     same = true;
//                 }
//             });

//             if (!same) {
//                 arr.push(number);
//                 loop = false;
//             }
//         }
//     }

//     const imgList = arr.map((e) => list[e]);

//     return imgList;
// }

// export const imgList = imageList();
