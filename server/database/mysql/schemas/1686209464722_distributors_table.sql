CREATE TABLE IF NOT EXISTS distributors(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  country_id BIGINT UNSIGNED NOT NULL REFERENCES countries(id) ON DELETE SET NULL,
  store_name VARCHAR(63) NOT NULL UNIQUE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  gender ENUM ('male', 'female') NOT NULL,
  reward_points NUMERIC(5, 2) NOT NULL DEFAULT 0,
  status ENUM ('pending', 'active', 'suspended', 'disabled') DEFAULT 'pending' NOT NULL,
  referal_code VARCHAR(10) NOT NULL UNIQUE,
  verified BOOLEAN DEFAULT FALSE NOT NULL,
  email_verified_at TIMESTAMP DEFAULT NULL,
  parent BIGINT UNSIGNED DEFAULT NULL REFERENCES tenants(referal_code) ON DELETE SET NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);