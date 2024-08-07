export class OnboardingPage {
  signupbtn = '[qid="home-1"]';
  radiobtn = "#teacher-radio > .r-container > .checkmark";
  nextbtn = '[value = "Next"]';
  continuebtn = '[qid="conf-2"]';
  firstname = "#gigya-textbox-120640165044771760";
  lastname = "#gigya-textbox-56649036382991330";
  email = "#gigya-loginID-48724291874120980";
  password = "#gigya-password-56383998600152700";
  country = "#gigya-textbox-82415858032213200";
  india_dropdown = '[aria-label="India"]';
  privacy_checkbox = ".ptop-15 > .nemo-checkbox > .gigya-label";
  signup_submit = '[value="Sign up"]';

  signupTeacher(teacher_email) {
    cy.get(this.signupbtn).click();
    cy.get(this.radiobtn).click();
    cy.get(this.nextbtn).click();
    cy.get(this.continuebtn).click();
    cy.get(this.firstname).type("QA");
    cy.get(this.lastname).type("Tester");
    cy.get(this.email).type(teacher_email);
    cy.get(this.password).type("Compro11");
    cy.get(this.country).type("India");
    cy.get(this.india_dropdown).should("be.visible", { timeout: 10000 });
    cy.get(this.india_dropdown).click();
    cy.get(this.privacy_checkbox).click();
    cy.get(this.signup_submit).click();
  }
}