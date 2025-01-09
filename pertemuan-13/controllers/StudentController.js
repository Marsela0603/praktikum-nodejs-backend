// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    if (students.length > 0) {
      const data = {
        message: "Menampilkan semua students",
        data: students,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: "Data student kosong",
      };

      return res.status(404).json(data);
    }
  }

  async store(req, res) {

    // Debug data yang diterima
  console.log("Received Body:", req.body);
    // Ambil data dari body atau query string
    const { nama, nim, email, jurusan } = req.body.nama ? req.body : req.query;
  
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua field harus diisi",
      };
      return res.status(422).json(data);
    }
  
    const student = await Student.create({ nama, nim, email, jurusan });
  
    const data = {
      message: "Menambahkan data student",
      data: student,
    };
  
    return res.status(201).json(data);
  }
  

  async update(req, res) {
    const { id } = req.params;
    // mencari student berdasarkan id untuk diupdate
    const student = await Student.find(id);

    if (student) {
      // melakukan proses update data student
      const students = await Student.update(req.body, id);
      const data = {
        message: `Mengedit student id ${id}`,
        data: students,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Data student id ${id} tidak ditemukan`,
      };

      return res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      // menghapus student berdasarkan id
      await Student.delete(id);
      const data = {
        message: `Menghapus student id ${id}`,
        data: student,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Data student id ${id} tidak ditemukan`,
      };

      return res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Menampilkan student id ${id}`,
        data: student,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Data student id ${id} tidak ditemukan`,
      };
      return res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
