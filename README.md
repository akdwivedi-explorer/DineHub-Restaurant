# DineHub 🍽️

**DineHub** is a modern, elegant restaurant table booking web application that allows users to reserve tables effortlessly by selecting a date, time, number of guests, and occasion. The application features a beautiful and intuitive UI/UX experience to enhance user engagement and satisfaction.

---

## 🚀 Features

- 🗓️ **Date-Based Booking**: Pick any date to see available slots.
- ⏰ **Real-Time Availability**: Shows dynamic time slots via `fetchAPI(date)`.
- 🧾 **Smart Booking Form**: Select number of guests, time, and occasion.
- 🧪 **Unit Testing**: Ensures robustness with test cases for key components.
- 🎨 **Beautiful UI/UX**: Fully responsive design with a clean, friendly interface.
- ✅ **API Integration**: Seamless data handling via mock API functions.

---

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6)**
- **TailwindCSS / Flexbox / Grid**
- **React Router Dom**
- **Jest & React Testing Library** – for unit testing

---

## 📦 API Reference

### `fetchAPI(date)`

- **Description**: Fetches available reservation time slots.
- **Parameters**: `date` (`String` | `Date`) – Booking date
- **Returns**: `Array<String>` – List of time slots

### `submitAPI(formData)`

- **Description**: Submits the reservation details.
- **Parameters**: `formData` (`Object`) – Includes date, time, guests, occasion
- **Returns**: `Boolean` – Success status

---

## 📸 Screenshots

### 🏠 Hero Section & Navigation
<img width="1458" height="839" alt="Screenshot 2025-07-28 at 9 14 03 PM" src="https://github.com/user-attachments/assets/2131f436-def4-49cb-8eee-df187d8151e0" />

### 🍽️ Weekly Specials & Menu & 🧑‍🍳 Testimonials & About Section
<img width="1470" height="956" alt="Screenshot 2025-07-28 at 9 14 16 PM" src="https://github.com/user-attachments/assets/16cbbabc-baa4-4ae5-a8a4-7101fd1126d8" />
<img width="1470" height="956" alt="Screenshot 2025-07-28 at 9 14 22 PM" src="https://github.com/user-attachments/assets/5d2c96dc-0b3c-4a75-8f3b-32b41a9f46d0" />

### 📝 Booking Form
<img width="1470" height="956" alt="Screenshot 2025-07-28 at 9 14 59 PM" src="https://github.com/user-attachments/assets/7e1bd4ee-755b-48f9-949f-0260de46965d" />

---

## 📂 Folder Structure
```bash
DineHub-Restaurant/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── api/
│ ├── tests/
│ └── App.js
├── tests/
├── README.md
└── package.json
```
---

## 🧪 Running Tests

To run unit tests:
```bash
npm test
```

## 🚀 Getting Started

Clone the repository:
```bash
git clone https://github.com/akdwivedi-explorer/DineHub-Restaurant.git
cd DineHub-Restaurant
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm start
```
Open http://localhost:3000 in your browser to view the app.

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License.

## 📬 Contact

For any inquiries or collaborations, feel free to reach out at [akumardwivedi77@gmail.com].

DineHub – Book your perfect table with ease! 🍷
