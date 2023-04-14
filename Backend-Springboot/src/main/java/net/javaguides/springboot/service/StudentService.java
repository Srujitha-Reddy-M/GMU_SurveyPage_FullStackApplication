package net.javaguides.springboot.service;

import java.util.List;

import net.javaguides.springboot.model.Student;

public interface StudentService {
	Student saveStudent(Student student);
	List<Student> getAllStudents();
	Student getStudentById(long id);
	Student updateStudent(Student student, long id);
}
