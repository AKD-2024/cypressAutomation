// <reference types="Cypress"/>
import { OnboardingPage } from "./pages/OnboardingPage";
import { MailsacPage } from "./pages/MailsacPage";
import { LearnerPracticePage } from "./pages/LearnerPracticePage";
import "cypress-iframe";

const onboardingPage = new OnboardingPage();
const mailsacPage = new MailsacPage();
const learnerPracticePage = new LearnerPracticePage();

describe("C1 App", () => {
  // let teacher_email = "cqateach_40we@mailsac.com";
  // before("loading data", () => {
  //   cy.generateRandomEmail("teach_").then((result) => {
  //     teacher_email = result;
  //     cy.log(teacher_email);
  //   });
  // });

  xit("sign up a teacher", () => {
    cy.visit("https://micro-nemo.comprodls.com");
    onboardingPage.signupTeacher(teacher_email);
    cy.wait(20000);
  });

  xit("mailsacVerification", () => {
    cy.visit("https://mailsac.com/login");
    mailsacPage.verifyEmail(teacher_email);
    cy.wait(2000);
  });

  it("learner login", () => {
    cy.visit("https://micro-nemo.comprodls.com");
    learnerPracticePage.loginLearner();
    cy.wait(5000);
    cy.visit("https://micro-nemo.comprodls.com/dashboard/learner/dashboard");
    learnerPracticePage.practicePE();
    cy.wait(2000);
    // learnerPracticePage.submitScorable();
    // cy.wait(2000);
    // learnerPracticePage.startOver();
    // cy.wait(2000);
    // learnerPracticePage.submitScorable();
    // Loop to run submitScorable 3 times
    learnerPracticePage.submitScorable();
    cy.wait(2000);
    learnerPracticePage.tocHandler();
    cy.wait(2000);
  });
});
