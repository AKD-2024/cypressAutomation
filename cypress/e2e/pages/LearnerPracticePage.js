export class LearnerPracticePage {
  loginbtn = '[qid="home-2"]';
  username = "#gigya-loginID-56269462240752180";
  password = "#gigya-password-56383998600152700";
  cardloginbtn = '[value="Log in"]';
  welcomeMessage = "h1.welcome-msg";
  iframe = "div#content-course-ext iframe";
  frame1_dropdown = "#content-0 .rich-dropdown";
  frame1_allOptions = "#content-0 .rich-dropdown ul li";
  frame2_dropdown = "#content-1 .rich-dropdown";
  frame2_allOptions = "#content-1 .rich-dropdown ul li";
  checkbtn = '[title="Check"]';
  nextbtn = '[title="Next"]';

  loginLearner() {
    cy.get(this.loginbtn).click();
    cy.get(this.username).type("testertwo@mailsac.com");
    cy.get(this.password).type("Compro11");
    cy.get(this.cardloginbtn).click();
    cy.get(this.welcomeMessage).should("be.visible");
  }

  practicePE() {
    cy.contains(" Practice Extra ").click();
  }

  submitScorable() {
    cy.frameLoaded(this.iframe); //frame is loaded

    // Frame - 1
    cy.iframe(this.iframe).find(this.frame1_dropdown).click();
    cy.iframe(this.iframe)
      .find(this.frame1_allOptions)
      .each((option) => {
        if (option.text() === "is doing") {
          cy.wrap(option).click();
        }
      });
    cy.get(this.checkbtn).click();
    cy.get(this.nextbtn).click();

    // Frame - 2
    cy.iframe(this.iframe).find(this.frame2_dropdown).click();
    cy.iframe(this.iframe)
      .find(this.frame2_allOptions)
      .each((option) => {
        if (option.text() === "is doing") {
          cy.wrap(option).click();
        }
      });
    cy.get(this.checkbtn).click();
    cy.get(this.nextbtn).click();
  }
}
