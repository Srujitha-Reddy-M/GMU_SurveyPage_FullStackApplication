package net.javaguides.springboot.service.impl;

import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;

import net.javaguides.springboot.service.StudentService;
import net.javaguides.springboot.model.Student;
import net.javaguides.springboot.repository.StudentRepository;
import net.javaguides.springboot.exception.ResourceNotFoundException;

@Service
public class StudentServiceImpl implements StudentService{
	
	private StudentRepository studentRepository;
	
	public StudentServiceImpl(StudentRepository studentRepository) {
		super();
		this.studentRepository = studentRepository;
	}

	@Override
	public Student saveStudent(Student student){
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}

	@Override
	public Student getStudentById(long id) {
		Optional<Student> student = studentRepository.findById(id);
		if(student.isPresent()) {
			return student.get();
		}
		else {
			throw new ResourceNotFoundException("Student","Id",id);
		}
	}

	@Override
	public Student updateStudent(Student student, long id) {
		
		//First checking with the database for student with given id already exists
		Student existingStudent = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student", "Id",id));
		existingStudent.setFirstName(student.getFirstName());
		existingStudent.setLastName(student.getLastName());
		existingStudent.setEmail(student.getEmail());
		existingStudent.setCity(student.getCity());
		existingStudent.setState(student.getState());
		existingStudent.setZipcode(student.getZipcode());
		existingStudent.setTelephone(student.getTelephone());
		existingStudent.setComments(student.getComments());
		
		//save students to database
				studentRepository.save(existingStudent);
				return existingStudent;
	}
				
}
