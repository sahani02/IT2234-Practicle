    (01) Create database bookshop 
          use bookshop
    
    ✔ This command will switch to the bookshop database.
    If the database doesn't exist, MongoDB will create it automatically once you insert data.
    
    (02) Create collection books
    
          db.createCollection("books")
    ✔ Creates an empty collection named books inside bookshop.

![Screenshot 2025-05-17 192704](https://github.com/user-attachments/assets/7cdb2d07-2c7e-4bb2-b782-a863a1a02166)

    (03) Insert multiple book documents into books
    
          db.books.insertMany([
            { /* The Hobbit document */ },
            { /* 1984 document */ },
            { /* To Kill a Mockingbird document */ },
            { /* The Great Gatsby document */ },
            { /* Brave New World document */ }
          ])
    ✔ This will insert all the book records into the books collection at once.

![Screenshot 2025-05-17 192738](https://github.com/user-attachments/assets/44950796-5850-4267-93ad-b3163b7a9605)
![Screenshot 2025-05-17 192800](https://github.com/user-attachments/assets/fd569a8a-947b-42d1-b9ea-051280401fc6)

    (04) Find all books
    
          db.books.find()
    ✔ Retrieves all documents in the books collection.

![Screenshot 2025-05-17 192846](https://github.com/user-attachments/assets/08421106-c775-466d-8cad-d183af37c097)
![Screenshot 2025-05-17 192904](https://github.com/user-attachments/assets/e01ea1b3-7a2a-4810-adc4-a5fc8d6d579d)
![Screenshot 2025-05-17 192946](https://github.com/user-attachments/assets/2c73b150-9b84-4fff-af27-b4a80d180394)

    (05) Find books published after 1950
    javascript
    Copy code
    db.books.find({ published_year: { $gt: 1950 } })
    ✔ Finds books where the published_year is greater than 1950.

![Screenshot 2025-05-17 193004](https://github.com/user-attachments/assets/e80d6c4d-8b1b-4a80-b8e4-d5bce3b9681b)


    (06) Find available books
    
    db.books.find({ available: true })
    ✔ Retrieves books where available is true (i.e., available in stock).
    
![Screenshot 2025-05-17 193021](https://github.com/user-attachments/assets/79a3c859-aa94-4a96-8abd-1e1f90400e3f)
![Screenshot 2025-05-17 193036](https://github.com/user-attachments/assets/90540823-af65-4191-802b-13b260e52a54)

    (07) Find books of "Dystopian" genre
    
    db.books.find({ genres: "Dystopian" })
    ✔ Finds books where the genres array contains "Dystopian".
   
![Screenshot 2025-05-17 193050](https://github.com/user-attachments/assets/a5ca1954-16dd-4c9b-8865-1155f228b7ef)

    (08) Find books published after 1960 and rating > 4.0
    db.books.find({ published_year: { $gt: 1960 }, rating: { $gt: 4.0 } })
    ✔ Finds books matching both conditions (published_year > 1960 AND rating > 4.0).
       
![Screenshot 2025-05-17 193106](https://github.com/user-attachments/assets/bb0b300b-a83e-448f-8b33-6e1b8d5cdf17)
 
    (09) Project only title and author
    
    db.books.find({}, { title: 1, author: 1, _id: 0 })
    ✔ Displays only title and author fields for all documents, hides _id.

![Screenshot 2025-05-17 193120](https://github.com/user-attachments/assets/c062bf5f-b616-4768-8675-352c5c0bebf3)

    (10) Update "1984" to set available: false
    
    db.books.updateOne({ title: "1984" }, { $set: { available: false } })
    ✔ Updates available to false for the book with title "1984".

![Screenshot 2025-05-17 193134](https://github.com/user-attachments/assets/69eb9d14-5fe3-4680-9cbf-34b04f296f13)

    (11) Increase rating of "Brave New World" by 0.1
    
    db.books.updateOne({ title: "Brave New World" }, { $inc: { rating: 0.1 } })
    ✔ Increments rating by 0.1 for the book "Brave New World".

![Screenshot 2025-05-17 193217](https://github.com/user-attachments/assets/992a9c34-7b90-4145-99e0-b127f1a59c58)
![Screenshot 2025-05-17 193142](https://github.com/user-attachments/assets/121db3dc-2da6-4918-87b2-906b354ecd6b)

    (12) Add genre "Classic" to "The Great Gatsby"
    
    db.books.updateOne(
      { title: "The Great Gatsby" },
      { $addToSet: { genres: "Classic" } }
    )
    ✔ Adds "Classic" to the genres array only if it's not already present ($addToSet prevents duplicates).

![Screenshot 2025-05-17 193252](https://github.com/user-attachments/assets/46c73cef-13f7-4e44-9a38-922c812980f8)
![Screenshot 2025-05-17 193235](https://github.com/user-attachments/assets/52aae9b1-3616-497e-a013-9c9c1a8dbbe5)
![Screenshot 2025-05-17 193157](https://github.com/user-attachments/assets/b124d803-fc0c-49e0-b135-1132234e3f6d)

    (13) Sort books by published_year ascending
    
    db.books.find().sort({ published_year: 1 })
    ✔ Sorts books from oldest to newest publication year.

![Screenshot 2025-05-17 193217](https://github.com/user-attachments/assets/e4fe9a06-5488-45ae-acc1-25c28e459a1c)


    (14) Sort books by rating descending
    
    db.books.find().sort({ rating: -1 })
    ✔ Sorts books by highest to lowest rating.

![Screenshot 2025-05-17 193323](https://github.com/user-attachments/assets/13d38226-1930-48e1-9505-a2f594205aab)
![Screenshot 2025-05-17 193356](https://github.com/user-attachments/assets/57f81b2d-a917-44ff-b4cb-a74de94e6997)
![Screenshot 2025-05-17 193341](https://github.com/user-attachments/assets/e7b3d414-002e-454f-82b4-14de374a1c47)

    
    (15) Delete all books with rating < 4.5
    
    db.books.deleteMany({ rating: { $lt: 4.5 } })
    ✔ Deletes all books where the rating is lower than 4.5.
![Screenshot 2025-05-17 193404](https://github.com/user-attachments/assets/cb775ca5-e5e9-4a58-9654-4ad1fd2640ef)


