package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.example.entity.User;

public interface UserMapper {
	User selectUser(Long id);

	List<User> findUsersByUsername(String username);

	int insertUser(@Param("user") User user);

	int updateEmail(Long id, String email);

	int deleteUser(Long id);

	int countByUsername(User user);
}
