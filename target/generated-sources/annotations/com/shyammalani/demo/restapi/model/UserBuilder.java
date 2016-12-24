package com.shyammalani.demo.restapi.model;

import javax.annotation.Generated;

@Generated("PojoBuilder")
public class UserBuilder
    implements Cloneable {
  protected UserBuilder self;
  protected String value$email$java$lang$String;
  protected boolean isSet$email$java$lang$String;
  protected String value$firstName$java$lang$String;
  protected boolean isSet$firstName$java$lang$String;
  protected String value$password$java$lang$String;
  protected boolean isSet$password$java$lang$String;
  protected String value$address$java$lang$String;
  protected boolean isSet$address$java$lang$String;

  /**
   * Creates a new {@link UserBuilder}.
   */
  public UserBuilder() {
    self = (UserBuilder)this;
  }

  /**
   * Sets the default value for the {@link User#email} property.
   *
   * @param value the default value
   * @return this builder
   */
  public UserBuilder withEmail(String value) {
    this.value$email$java$lang$String = value;
    this.isSet$email$java$lang$String = true;
    return self;
  }

  /**
   * Sets the default value for the {@link User#firstName} property.
   *
   * @param value the default value
   * @return this builder
   */
  public UserBuilder withFirstName(String value) {
    this.value$firstName$java$lang$String = value;
    this.isSet$firstName$java$lang$String = true;
    return self;
  }

  /**
   * Sets the default value for the {@link User#password} property.
   *
   * @param value the default value
   * @return this builder
   */
  public UserBuilder withPassword(String value) {
    this.value$password$java$lang$String = value;
    this.isSet$password$java$lang$String = true;
    return self;
  }

  /**
   * Sets the default value for the {@link User#address} property.
   *
   * @param value the default value
   * @return this builder
   */
  public UserBuilder withAddress(String value) {
    this.value$address$java$lang$String = value;
    this.isSet$address$java$lang$String = true;
    return self;
  }

  /**
   * Returns a clone of this builder.
   *
   * @return the clone
   */
  @Override
  public Object clone() {
    try {
      UserBuilder result = (UserBuilder)super.clone();
      result.self = result;
      return result;
    } catch (CloneNotSupportedException e) {
      throw new InternalError(e.getMessage());
    }
  }

  /**
   * Returns a clone of this builder.
   *
   * @return the clone
   */
  public UserBuilder but() {
    return (UserBuilder)clone();
  }

  /**
   * Copies the values from the given pojo into this builder.
   *
   * @param pojo
   * @return this builder
   */
  public UserBuilder copy(User pojo) {
    withEmail(pojo.email);
    withFirstName(pojo.firstName);
    withPassword(pojo.password);
    withAddress(pojo.address);
    return self;
  }

  /**
   * Creates a new {@link User} based on this builder's settings.
   *
   * @return the created User
   */
  public User build() {
    try {
      User result = new User();
      if (isSet$email$java$lang$String) {
        result.email = value$email$java$lang$String;
      }
      if (isSet$firstName$java$lang$String) {
        result.firstName = value$firstName$java$lang$String;
      }
      if (isSet$password$java$lang$String) {
        result.password = value$password$java$lang$String;
      }
      if (isSet$address$java$lang$String) {
        result.address = value$address$java$lang$String;
      }
      return result;
    } catch (RuntimeException ex) {
      throw ex;
    } catch (Exception ex) {
      throw new java.lang.reflect.UndeclaredThrowableException(ex);
    }
  }
}
