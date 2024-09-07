// 3.1. Kiểu Number
// var a: number = 10;
// a = "20";//Lỗi
// a = true; Lỗi
// a = 20;


// 3.2 Kiểu String
// var a: string = "Le Van A";
// // a = 10; Lỗi
// a = "10";


// 3.3 Kiểu boolean
// var a: boolean = true;
// a = 10// Lỗi
// a = false;


// 4. Kiểu Object
// const infoUser: {
//   fullName: string,
//   age: number,
//   phone: string
// } = {
//   fullName: "Le Van A",
//   age: 18,
//   phone: "9273924"
// }
// infoUser.age ="20" // Sai vì gán sai kiểu dữ liệu
// infoUser.email = "levana@gamil.com"// Lỗi, vì không có key email trong infoUser


// 5. Interface
// ? có nghĩa là optional (tùy chọn)
// interface Social {
//   facebook: string,
//   zalo: string,
//   tiktok?: string
// }
// interface infoUser {
//   fullName: string,
//   age?: number,
//   phone: string,
//   social?: Social
// }
// const infoUserA: infoUser = {
//   fullName: "Le van A",
//   age: 18,
//   phone: "374382574238",
//   social: {
//     facebook: "#",
//     zalo: "#"
//   }
// };
// const infoUserB: infoUser = {
//   fullName: "Le van B",
//   phone: "374382574238",
//   social: {
//     facebook: "#",
//     zalo: "#"
//   }
// };
// const infoUserC: infoUser = {
//   fullName: "Le van C",
//   phone: "374382574238",
// };


// 6. Extend interface
// interface Account {
//   fullName: string,
//   email: string,
//   phone: string,
//   password: string
// }
// interface AccountAdmin extends Account {
//   roleId: string
// }
// interface AccountUser extends Account {
//   score: number
// }
// const admin: AccountAdmin = {
//   fullName:"le van a",
//   email:"levana@gmail.com",
//   phone:"92342935",
//   password:"123456",
//   roleId:"123"
// }
// const user: AccountUser = {
//   fullName: "Le Van B",
//   email: "levanb@gmail.com",
//   phone: "01234567890",
//   password: "123456",
//   score: 120
// };


// 7. Kiểu Array
// Ví dụ 1
// const arrayNumber: number[] = [1, 2, 3]; // Không lỗi
// const arrayNumber2: number[] = [1, 2, "jsfs"] //lỗi

// Ví dụ 2
// const arrayString: string[] = ["Le Van A", "Le Van B"]; // Không lỗi
// const arrayString: string[] = ["Le Van A", "Le Van B", 1, true]; // Lỗi

// Ví dụ 3
// const array3: (string | number)[] = ["Le Van A", 18]; // Không lỗi
// const array3: (string | number)[] = ["Le Van A", 18, true]; // Lỗi

// Ví dụ 4
// interface User {
//   fullName: string,
//   age: number
// }
// const arrayUser: User[] = [
//   {
//     fullName: "LevanA",
//     age: 18
//   },
//   {
//     fullName: "LevanB",
//     age:19
//   }
// ];


// 8. Kiểu Tuple
// let clock: [number, number, number];
// clock = [22,13,50] // Không lỗi
// clock = [22,13,59,23] Lỗi


// 9. Readonly
// interface User {
//   fullName:string,
//   email:String,
//   readonly token:String
// }
// // Tạo mới tài khoản
// const registerUserA : User = {
//   fullName :"Levana",
//   email:"levana@gamail.com",
//   token:"ACB"
// };
// // Cập nhật tài khoản
// registerUserA.fullName = "LeVanB";// Không lỗi
// registerUserA.token = "XYZ";// Lỗi


// 10. Functions
// const sum = (a: number, b: number): number => {
//   const total = a+b;
//   return total
// }
// const result1 = sum(10, 20);
// const result2 = sum(result1, 50);

// console.log(result1);
// console.log(result2);

// 11. Default Parameters
// const sum = (a: number = 0, b: number = 0): number => {
//   const total = a + b;
//   return total;
// }

// const result1 = sum(10);
// const result2 = sum(result1, 50);

// console.log(result1);
// console.log(result2);

// 12. Rest Parameters
// const sum = (...arrayNumber: number[]): number => {
//   let total = 0;

//   for(let item of arrayNumber) {
//     total += item;
//   }

//   return total;
// }

// const result = sum(10, 20, 30, 40);
// console.log(result);

// 13. Kiểu Enum
// const PRODUCT_ACTIVE = "active";
// const PRODUCT_INACTIVE = "inactive";
// const PRODUCT_INITIAL = "initial";

// enum Product {
//   ACTIVE = "active",
//   INACTIVE = "inactive",
//   INITIAL = "initial"
// }

// let statusCurrent = "inactive";

// switch (statusCurrent) {
//   case Product.ACTIVE:
//     console.log("Viết logic active");
//     break;
//   case Product.INACTIVE:
//     console.log("Viết logic inactive");
//     break;
//   case Product.INITIAL:
//     console.log("Viết logic initial");
//     break;
//   default:
//     break;
// }

// 14. Kiểu Any
// var a: any = 10;
// a = "10";
// a = true;

// Bài 37

// 01. Kiểu Void
// const hello = (fullName: string): string => {
//   return `Xin chào ${fullName}`;
// }

// console.log(hello("Le Van A"));


// const hello = (fullName: string): void => {
//   console.log(`Xin chào ${fullName}`);
// }

// hello("Le Van A");



// 02. Union type
// interface Product {
//   id: string,
//   title: string,
//   price: string,
//   rating: number | string,
//   status: "initial" | "active" | "inactive"
// }

// interface Account {
//   id: string,
//   fullName: string,
//   phone: string,
//   status: "initial" | "active" | "inactive"
// }



// 03. Type alias
// type RatingType = number | string;
// type StatusType = "initial" | "active" | "inactive";

// interface Product {
//   id: string,
//   title: string,
//   price: string,
//   rating: RatingType,
//   status: StatusType
// }

// interface Account {
//   id: string,
//   fullName: string,
//   phone: string,
//   status: StatusType
// }



// 04. Intersection type (Hợp nhiều Interface thành 1)
// interface Account {
//   id: string,
//   fullName: string,
//   age: number
// }

// interface Contact {
//   email: string,
//   phone: string,
//   address: string
// }

// interface Social {
//   facebook?: string,
//   zalo?: string,
//   tiktok?: string
// }

// type AccountContact = Account & Contact;
// type AccountSocial = Account & Social;
// type AccountFull = Account & Contact & Social;



// 05. Declaration merging (Hợp 2 Interface trùng tên thành 1)
// interface User {
//   id: string,
//   fullName: string
// }

// interface User {
//   email: string,
//   phone: string
// }

// const userA: User = {
//   id: "123",
//   fullName: "Le Van A",
//   email: "levana@gmail.com",
//   phone: "0123456789"
// };




// 6.1. Partial<Type>
// Thay đổi tất cả các thuộc tính trong một interface thành tùy chọn (optional)
// interface User {
//   fullName: string,
//   email: string,
//   password: string
// }

// const createUserA: User = {
//   fullName: "Le Van A",
//   email: "levana@gmail.com",
//   password: "123456"
// }

// const updateUserB: Partial<User> = {
//   fullName: "Le Van A"
// }



// 6.2. Required<Type>
// Thay đổi tất cả các thuộc tính trong một đối tượng thành bắt buộc
// interface Product {
//   title: string,
//   price?: number,
//   desc?: string
// }

// const createProduct1: Product = {
//   title: "Sản phẩm 1"
// };

// const updateProduct2: Required<Product> = {
//   title: "Sản phẩm 2",
//   price: 120000,
//   desc: "Mô tả sản phẩm 2"
// };



// 6.3. Omit<Type, Keys>
// Xóa một hoặc nhiều thuộc tính ra khỏi đối tượng.
// interface User {
//   fullName: string,
//   email: string,
//   cccd: string,
//   password: string,
//   phone?: string
// }

// const createUserA: User = {
//   fullName: "Le Van A",
//   email: "levana@gmail.com",
//   cccd: "123456789",
//   password: "123456"
// };

// const updateUserB: Omit<User, "fullName" | "cccd"> = {
//   email: "levana@gmail.com",
//   password: "123456"
// };




// 6.4. Pick<Type, Keys>
// Xóa tất cả các thuộc tính ra khỏi đối tượng, ngoài trừ các thuộc tính muốn giữ lại.
// interface User {
//   fullName: string,
//   email: string,
//   cccd: string,
//   password: string,
//   phone?: string
// }

// const createUserA: User = {
//   fullName: "Le Van A",
//   email: "levana@gmail.com",
//   cccd: "123456789",
//   password: "123456"
// };

// const updateUserB: Pick<User, "email" | "password"> = {
//   email: "levana@gmail.com",
//   password: "123456"
// };



// 6.5. Readonly<Type>
// Tất cả các thuộc tính trong đối tượng đổi thành trạng thái chỉ đọc, không sửa được.
// interface Product {
//   title: string,
//   price?: number,
//   desc?: string
// }

// const createProduct1: Product = {
//   title: "Sản phẩm 1",
//   price: 120000,
//   desc: "Mô tả sản phẩm 1"
// };

// createProduct1.price = 200000;

// const createProduct2: Readonly<Product> = {
//   title: "Sản phẩm 2",
//   price: 120000,
//   desc: "Mô tả sản phẩm 2"
// };

// createProduct2.price = 150000; // Lỗi