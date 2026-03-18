// src/data/questions.js

const questionsData = {
  Mathematics: {
    paper1: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
      },
      {
        question: "What is the square of 5?",
        options: ["10", "15", "20", "25"],
        answer: "25"
      },
      {
        question: "Simplify: 3 × 4",
        options: ["7", "12", "9", "14"],
        answer: "12"
      },
      {
        question: "What is 10 ÷ 2?",
        options: ["2", "5", "10", "20"],
        answer: "5"
      },
      {
        question: "What is 7 + 6?",
        options: ["12", "13", "14", "15"],
        answer: "13"
      }
    ],
    paper2: [
      {
        question: "Solve for x: 2x + 5 = 15",
        answer: "5",
        examinerTip: "Subtract 5 from both sides, then divide by 2."
      },
      {
        question: "Find the derivative of f(x) = x^2",
        answer: "2x",
        examinerTip: "Use the power rule: d/dx[x^n] = n*x^(n-1)."
      },
      {
        question: "Integrate: ∫ 3x dx",
        answer: "3/2 x^2 + C",
        examinerTip: "Increase power by 1 and divide by new power."
      },
      {
        question: "Simplify the expression: (x^2 * x^3)",
        answer: "x^5",
        examinerTip: "Add exponents when multiplying same base."
      },
      {
        question: "If f(x) = 2x + 3, find f(5)",
        answer: "13",
        examinerTip: "Plug x = 5 into the function and solve."
      }
    ]
  },

  Physics: {
    paper1: [
      {
        question: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        answer: "Newton"
      },
      {
        question: "Which particle has negative charge?",
        options: ["Proton", "Neutron", "Electron", "Photon"],
        answer: "Electron"
      },
      {
        question: "Speed of light in vacuum?",
        options: ["3×10^8 m/s", "3×10^6 m/s", "3×10^5 m/s", "3×10^3 m/s"],
        answer: "3×10^8 m/s"
      },
      {
        question: "Unit of energy?",
        options: ["Newton", "Joule", "Pascal", "Tesla"],
        answer: "Joule"
      },
      {
        question: "Acceleration formula?",
        options: ["v/t", "s/t", "F/m", "m/F"],
        answer: "v/t"
      }
    ],
    paper2: [
      {
        question: "State Newton's Second Law of Motion",
        answer: "Force equals mass times acceleration",
        examinerTip: "F = m * a"
      },
      {
        question: "Explain Ohm's Law",
        answer: "Voltage equals current times resistance",
        examinerTip: "V = I * R"
      },
      {
        question: "Calculate the work done when 10N moves 5m",
        answer: "50",
        examinerTip: "Work = Force * Distance"
      },
      {
        question: "What is kinetic energy formula?",
        answer: "1/2 m v^2",
        examinerTip: "KE = 0.5 * mass * velocity squared"
      },
      {
        question: "Explain gravitational potential energy",
        answer: "Energy = mass * g * height",
        examinerTip: "PE = m * g * h"
      }
    ]
  },

  Chemistry: {
    paper1: [
      {
        question: "H2O is commonly known as?",
        options: ["Oxygen", "Water", "Hydrogen", "Salt"],
        answer: "Water"
      },
      {
        question: "Atomic number of Carbon?",
        options: ["6", "12", "14", "8"],
        answer: "6"
      },
      {
        question: "pH of neutral water?",
        options: ["0", "7", "14", "1"],
        answer: "7"
      },
      {
        question: "NaCl is?",
        options: ["Salt", "Sugar", "Acid", "Base"],
        answer: "Salt"
      },
      {
        question: "Chemical symbol for Gold?",
        options: ["Au", "Ag", "Gd", "Go"],
        answer: "Au"
      }
    ],
    paper2: [
      {
        question: "Explain the difference between ionic and covalent bonds",
        answer: "Ionic bonds transfer electrons; covalent bonds share electrons",
        examinerTip: "Think electron transfer vs sharing"
      },
      {
        question: "Balance: H2 + O2 → H2O",
        answer: "2 H2 + O2 → 2 H2O",
        examinerTip: "Ensure same number of H and O on both sidess"
      },
      {
        question: "Define molarity",
        answer: "Number of moles of solute per liter of solution",
        examinerTip: "M = moles / volume(L)"
      },
      {
        question: "What is Avogadro's number?",
        answer: "6.022 × 10^23",
        examinerTip: "Number of particles in one mole"
      },
      {
        question: "Explain exothermic reaction",
        answer: "Reaction that releases heat",
        examinerTip: "Energy flows out of the system"
      }
    ]
  }
};

export default questionsData;