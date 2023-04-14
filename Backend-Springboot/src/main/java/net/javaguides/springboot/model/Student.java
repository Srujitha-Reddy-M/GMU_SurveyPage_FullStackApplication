package net.javaguides.springboot.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;

@Data
@Entity
@Table(name="students")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name ="first_name", nullable = false)
	private String firstName;
	@Column(name ="last_name", nullable = false)
	private String lastName;
	@Column(name ="street_address", nullable = false)
	private String street_address;
	@Column(name ="city", nullable = false)
	private String city;
	@Column(name ="state", nullable = false)
	private String state;
	@Column(name ="zipcode", nullable = false)
	private String zipcode;
	@Column(name ="telephone")
	private String telephone;
	@Column(name ="email", nullable = false)
	private String email;
	@Column(name ="comments")
	private String comments;


}
