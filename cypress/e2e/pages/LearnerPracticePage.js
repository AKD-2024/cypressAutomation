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
  frame3_dropdown = "#content-2 .rich-dropdown";
  frame4_dropdown = "#content-3 .rich-dropdown";
  allOptions = "ul li";
  checkbtn = '[title="Check"]';
  nextbtn = '[title="Next"]';
  sidebar = "a.open-sidebar-btn";
  closeSidebar = ".unit-view-header a.close-sidebar";

  loginLearner() {
    cy.get(this.loginbtn).click();
    cy.get(this.username).type("Learner200@mailsac.com");
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

    // Frame - 3 - First Dropdown 
    cy.iframe(this.iframe).find(this.frame3_dropdown).eq(0).click();
    cy.iframe(this.iframe)
      .find(this.frame3_dropdown)
      .eq(0)
      .find(this.allOptions)
      .each((option) => {
        if (option.text() === "in the middle of the country") {
          cy.wrap(option).click();
        }
      });
  
    // Frame - 3 - Second Dropdown 
    cy.iframe(this.iframe).find(this.frame3_dropdown).eq(1).click();
    cy.iframe(this.iframe)
      .find(this.frame3_dropdown)
      .eq(1)
      .find(this.allOptions)
      .each((option) => {
        if (option.text() === "I found a job at a big") {
          cy.wrap(option).click();
        }
      });

    // Frame - 3 - Third Dropdown 
    cy.iframe(this.iframe).find(this.frame3_dropdown).eq(2).click();
    cy.iframe(this.iframe)
      .find(this.frame3_dropdown)
      .eq(2)
      .find(this.allOptions)
      .each((option) => {
        if (option.text() === "six months ago") {
          cy.wrap(option).click();
        }
      });

    // Frame - 3 - Fourth Dropdown 
    cy.iframe(this.iframe).find(this.frame3_dropdown).eq(3).click();
    cy.iframe(this.iframe)
      .find(this.frame3_dropdown)
      .eq(3)
      .find(this.allOptions)
      .each((option) => {
        if (option.text() === "also a little scary sometimes") {
          cy.wrap(option).click();
        }
      });
    
    // After selecting answer from all the dropdown then check & next
    cy.get(this.checkbtn).click();
    cy.get(this.nextbtn).click();

    // Frame - 4 - First Dropdown 
    cy.iframe(this.iframe).find(this.frame4_dropdown).eq(0).click();
    cy.iframe(this.iframe)
      .find(this.frame4_dropdown)
      .eq(0)
      .find(this.allOptions)
      .each((option) => {
        if (option.text() === "in the middle of the country") {
          cy.wrap(option).click();
        }
      });
  
    // Frame - 4 - Second Dropdown 
    cy.iframe(this.iframe).find(this.frame4_dropdown).eq(1).click();
    cy.iframe(this.iframe)
      .find(this.frame4_dropdown)
      .eq(1)
      .find(this.allOptions)
      .each((option) => {
        if (option.text() === "I found a job at a big") {
          cy.wrap(option).click();
        }
      });

    // Frame - 4- Third Dropdown 
    cy.iframe(this.iframe).find(this.frame4_dropdown).eq(2).click();
    cy.iframe(this.iframe)
      .find(this.frame4_dropdown)
      .eq(2)
      .find(this.allOptions)
      .each((option) => {
        if (option.text() === "six months ago") {
          cy.wrap(option).click();
        }
      });

    // Frame - 4 - Fourth Dropdown 
    cy.iframe(this.iframe).find(this.frame4_dropdown).eq(3).click();
    cy.iframe(this.iframe)
      .find(this.frame4_dropdown)
      .eq(3)
      .find(this.allOptions)
      .each((option) => {
        if (option.text() === "also a little scary sometimes") {
          cy.wrap(option).click();
        }
      });
    
    // After selecting answer from all the dropdown then check & next
    cy.get(this.checkbtn).click();
    cy.get(this.nextbtn).click();
  }

  scorableActivity(i) {
    return `[title="Scorable activity${i}"]`;
  }

  tocHandler() {
    for (let i = 2; i <= 200; i++) {
      cy.get(this.sidebar).click();
      cy.get(this.scorableActivity(i)).click();
      cy.get(this.closeSidebar).click();
      this.submitScorable();
    }
  }
}
