// <reference types="Cypress"/>
import { OnboardingPage } from "./pages/OnboardingPage";
import { MailsacPage } from "./pages/MailsacPage";

const onboardingPage = new OnboardingPage();
const mailsacPage = new MailsacPage();

describe("C1 App", () => {
  let teacher_email = "cqateach_40we@mailsac.com";
  // before("loading data", () => {
  //   cy.generateRandomEmail("teach_").then((result) => {
  //     teacher_email = result;
  //     cy.log(teacher_email);
  //   });
  // });

  // it("sign up a teacher", () => {
  //   cy.visit("https://micro-nemo.comprodls.com");
  //   onboardingPage.signupTeacher(teacher_email);
  //   cy.wait(20000);
  // });

  it("mailsacVerification", () => {
    cy.visit("https://mailsac.com/login");
    mailsacPage.verifyEmail(teacher_email);
    cy.wait(2000);
  });
});
