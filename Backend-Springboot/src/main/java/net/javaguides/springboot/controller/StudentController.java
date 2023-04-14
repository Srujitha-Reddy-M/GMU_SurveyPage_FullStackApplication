package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Student;
import net.javaguides.springboot.service.StudentService;

@RestController
@RequestMapping("/api/students")
public class StudentController {
	
	private StudentService studentService;

	public StudentController(StudentService studentService) {
		super();
		this.studentService = studentService;
	}
	
	//student Rest API
	@PostMapping()
	public ResponseEntity<Student> saveStudent(@RequestBody Student student){
		return new ResponseEntity<Student>(studentService.saveStudent(student),HttpStatus.CREATED);
		
	}
	
	// get all students REST API
		@GetMapping
		public List<Student> getAllStudents(){
			return studentService.getAllStudents();
		}
		
	//get student by id REST API
		@GetMapping("{id}")
		public ResponseEntity<Student> getStudentById(@PathVariable("id")long studentId){
			return new ResponseEntity<Student>(studentService.getStudentById(studentId),HttpStatus.OK);
		}
		
		//update employee REST API
		@PutMapping("{id}")
		public ResponseEntity<Student> updateStudent(@PathVariable("id") long id,@RequestBody Student student){
			return new ResponseEntity<Student>(studentService.updateStudent(student, id), HttpStatus.OK);
		}
		
}
