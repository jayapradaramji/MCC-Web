const sections = [
  {
    id: "profile",
    name: "Sustainability Profile",
    badge: "Eco Explorer Badge Unlocked",
    xp: 50,
    awareness: 10,
    questions: [
      {
        title: "Which best describes your current lifestyle?",
        help: "Pick the card that feels closest to your everyday routine.",
        type: "choice",
        key: "lifestyle",
        options: [
          { value: "office", label: "Office Professional", icon: "🏢", helper: "Regular office commute." },
          { value: "wfh", label: "WFH Professional", icon: "🏠", helper: "Home energy matters more." },
          { value: "hybrid", label: "Hybrid Worker", icon: "🔄", helper: "A mix of commute and home energy." },
          { value: "student", label: "Student", icon: "🎓", helper: "Campus or local travel." },
          { value: "traveller", label: "Frequent Traveller", icon: "🌍", helper: "Travel footprint matters more." }
        ]
      },
      {
        title: "Where are you based?",
        help: "City helps tune regional assumptions later.",
        type: "select",
        key: "location",
        value: "Bengaluru, Karnataka",
        options: [
          "Amaravati, Andhra Pradesh",
          "Itanagar, Arunachal Pradesh",
          "Dispur / Guwahati, Assam",
          "Patna, Bihar",
          "Raipur, Chhattisgarh",
          "Panaji, Goa",
          "Gandhinagar / Ahmedabad, Gujarat",
          "Chandigarh, Haryana",
          "Shimla, Himachal Pradesh",
          "Ranchi, Jharkhand",
          "Bengaluru, Karnataka",
          "Thiruvananthapuram, Kerala",
          "Bhopal, Madhya Pradesh",
          "Mumbai, Maharashtra",
          "Imphal, Manipur",
          "Shillong, Meghalaya",
          "Aizawl, Mizoram",
          "Kohima, Nagaland",
          "Bhubaneswar, Odisha",
          "Chandigarh, Punjab",
          "Jaipur, Rajasthan",
          "Gangtok, Sikkim",
          "Chennai, Tamil Nadu",
          "Hyderabad, Telangana",
          "Agartala, Tripura",
          "Lucknow, Uttar Pradesh",
          "Dehradun, Uttarakhand",
          "Kolkata, West Bengal",
          "Delhi NCR",
          "Puducherry",
          "Srinagar / Jammu, Jammu and Kashmir",
          "Leh, Ladakh",
          "Port Blair, Andaman and Nicobar Islands",
          "Kavaratti, Lakshadweep",
          "Daman, Dadra and Nagar Haveli and Daman and Diu",
          "Pune, Maharashtra",
          "Coimbatore, Tamil Nadu",
          "Kochi, Kerala",
          "Mysuru, Karnataka",
          "Visakhapatnam, Andhra Pradesh",
          "Other city / state"
        ]
      },
      {
        title: "How many people share your home?",
        help: "Move the slider to match your household.",
        type: "range",
        key: "household",
        value: 4,
        min: 1,
        max: 10,
        step: 1,
        suffix: " people"
      },
      {
        title: "Do you have pets?",
        help: "Choose the closest option.",
        type: "choice",
        key: "pets",
        options: [
          { value: "dog", label: "Dog", icon: "🐶", helper: "Dog at home." },
          { value: "cat", label: "Cat", icon: "🐱", helper: "Cat at home." },
          { value: "bird", label: "Bird", icon: "🐦", helper: "Bird at home." },
          { value: "fish", label: "Fish", icon: "🐠", helper: "Fish or aquarium." },
          { value: "none", label: "No Pets", icon: "✖", helper: "No regular pet footprint." }
        ]
      }
    ]
  },
  {
    id: "mobility",
    name: "Mobility Story",
    badge: "Clean Commuter Badge Unlocked",
    xp: 70,
    awareness: 15,
    questions: [
      {
        title: "What's your primary transport mode?",
        help: "Swipe mentally, tap physically.",
        type: "choice",
        key: "transport",
        options: [
          { value: "car", label: "Car", icon: "🚗", helper: "Personal four-wheeler." },
          { value: "bike", label: "Bike", icon: "🛵", helper: "Two-wheeler." },
          { value: "metro", label: "Metro", icon: "🚇", helper: "Urban rail." },
          { value: "bus", label: "Bus", icon: "🚌", helper: "Shared road transport." },
          { value: "walk", label: "Walk", icon: "🚶", helper: "No fuel footprint." },
          { value: "cycle", label: "Cycle", icon: "🚲", helper: "Active mobility." }
        ]
      },
      {
        title: "Daily commute distance?",
        help: "0 km means minimal travel emissions. 50+ km flags a longer commute.",
        type: "range",
        key: "distance",
        value: 12,
        min: 0,
        max: 50,
        step: 1,
        suffix: " km"
      },
      {
        title: "Days travelled per week?",
        help: "Tap the days you normally travel.",
        type: "days",
        key: "travelDays",
        value: ["Mon", "Tue", "Wed"],
        options: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      {
        title: "Vehicle fuel type?",
        help: "Choose the fuel that powers your main ride.",
        type: "choice",
        key: "fuel",
        options: [
          { value: "petrol", label: "Petrol", icon: "⛽", helper: "Common fuel baseline." },
          { value: "diesel", label: "Diesel", icon: "🛢", helper: "Higher tailpipe factor." },
          { value: "ev", label: "EV", icon: "⚡", helper: "Lower operating emissions." },
          { value: "hybrid", label: "Hybrid", icon: "🔋", helper: "Improved fuel efficiency." },
          { value: "cng", label: "CNG", icon: "🌱", helper: "Lower fossil fuel estimate." }
        ]
      },
      {
        title: "How do you reach Metro Station?",
        help: "Build your first-mile journey.",
        type: "choice",
        key: "metroAccess",
        options: [
          { value: "walk", label: "Walk", icon: "🚶", helper: "Lowest first-mile impact." },
          { value: "cycle", label: "Cycle", icon: "🚲", helper: "Active first-mile trip." },
          { value: "feeder", label: "Feeder Bus", icon: "🚌", helper: "Shared first-mile ride." },
          { value: "auto", label: "Auto", icon: "🛺", helper: "Short motorized ride." },
          { value: "personal", label: "Personal Vehicle", icon: "🛵", helper: "Personal first-mile ride." }
        ]
      },
      {
        title: "Long-distance travel preference?",
        help: "What do you usually choose for intercity travel?",
        type: "choice",
        key: "longTravel",
        options: [
          { value: "train", label: "Train", icon: "🚆", helper: "Lower-carbon long-distance option." },
          { value: "bus", label: "Bus", icon: "🚌", helper: "Shared road trip." },
          { value: "flight", label: "Flight", icon: "✈", helper: "Fast but high impact." },
          { value: "car", label: "Car", icon: "🚗", helper: "Road trip by car." }
        ]
      },
      {
        title: "Flights per year?",
        help: "Use the counter for annual flight count.",
        type: "range",
        key: "flights",
        value: 1,
        min: 0,
        max: 20,
        step: 1,
        suffix: " flights"
      }
    ]
  },
  {
    id: "home",
    name: "Home Energy",
    badge: "Energy Saver Badge Unlocked",
    xp: 65,
    awareness: 15,
    questions: [
      { title: "AC usage per day?", help: "Use the dial-like slider for summer usage.", type: "range", key: "acHours", value: 4, min: 0, max: 12, step: 1, suffix: " hrs/day" },
      {
        title: "Select appliances you use daily",
        help: "Selected items glow green.",
        type: "multi",
        key: "appliances",
        value: ["laptop", "router", "fan"],
        options: [
          { value: "laptop", label: "Laptop", icon: "💻", helper: "Work or study device." },
          { value: "tv", label: "TV", icon: "📺", helper: "Entertainment device." },
          { value: "router", label: "Router", icon: "📶", helper: "Always-on internet." },
          { value: "ac", label: "AC", icon: "❄", helper: "Cooling load." },
          { value: "fan", label: "Fan", icon: "🌀", helper: "Low-power cooling." },
          { value: "heater", label: "Water Heater", icon: "♨", helper: "High heat load." }
        ]
      },
      { title: "Device usage hours", help: "Think of this as your daily battery meter.", type: "range", key: "deviceUsage", value: 60, min: 0, max: 100, step: 5, suffix: "%" },
      {
        title: "Cooking energy source",
        help: "Pick the kitchen energy source you use most.",
        type: "choice",
        key: "cooking",
        options: [
          { value: "lpg", label: "LPG", icon: "🔥", helper: "Cylinder cooking fuel." },
          { value: "induction", label: "Induction", icon: "⚡", helper: "Electric cooking." },
          { value: "png", label: "PNG", icon: "🌱", helper: "Piped natural gas." },
          { value: "mixed", label: "Mixed", icon: "🍳", helper: "Combination of fuels." }
        ]
      },
      {
        title: "Sustainable technologies in your home",
        help: "Light up the badges you already use.",
        type: "multi",
        key: "homeTech",
        value: [],
        options: [
          { value: "solar", label: "Solar Panels", icon: "☀", helper: "Generates clean power." },
          { value: "solarHeater", label: "Solar Water Heater", icon: "♨", helper: "Reduces heating load." },
          { value: "rainwater", label: "Rainwater Harvesting", icon: "🌧", helper: "Water conservation." },
          { value: "waste", label: "Waste Segregation", icon: "♻", helper: "Better waste handling." }
        ]
      }
    ]
  },
  {
    id: "food",
    name: "Food & Lifestyle",
    badge: "Mindful Consumer Badge Unlocked",
    xp: 70,
    awareness: 15,
    questions: [
      {
        title: "Food preference",
        help: "Choose your typical food pattern.",
        type: "choice",
        key: "diet",
        options: [
          { value: "vegetarian", label: "Vegetarian", icon: "🥗", helper: "Vegetables, grains, and dairy." },
          { value: "vegan", label: "Vegan", icon: "🌱", helper: "Plant-based meals." },
          { value: "eggetarian", label: "Eggetarian", icon: "🍳", helper: "Vegetarian plus eggs." },
          { value: "nonveg", label: "Non-Vegetarian", icon: "🍗", helper: "Regular meat or fish meals." }
        ]
      },
      { title: "Non-veg consumption frequency", help: "Select meals per week.", type: "range", key: "nonVegMeals", value: 2, min: 0, max: 21, step: 1, suffix: " meals/week" },
      { title: "Dairy consumption", help: "Fill the milk glass from empty to full.", type: "range", key: "dairy", value: 50, min: 0, max: 100, step: 5, suffix: "%" },
      { title: "Food delivery frequency", help: "How many food packages arrive monthly?", type: "range", key: "deliveries", value: 4, min: 0, max: 20, step: 1, suffix: " deliveries/month" },
      {
        title: "Reusable items",
        help: "Each click fills a green habit heart.",
        type: "multi",
        key: "reusables",
        value: ["bottle"],
        options: [
          { value: "bottle", label: "Carry bottle", icon: "❤", helper: "Avoid single-use bottles." },
          { value: "bag", label: "Cloth bag", icon: "❤", helper: "Avoid plastic bags." },
          { value: "lunchbox", label: "Lunch box", icon: "❤", helper: "Reduce packaging." },
          { value: "cup", label: "Reusable cup", icon: "❤", helper: "Avoid disposable cups." }
        ]
      }
    ]
  },
  {
    id: "digital",
    name: "Digital Lifestyle",
    badge: "Digital Minimalist Badge Unlocked",
    xp: 45,
    awareness: 10,
    questions: [
      { title: "Number of devices used", help: "Stack your daily digital devices.", type: "range", key: "deviceCount", value: 3, min: 0, max: 10, step: 1, suffix: " devices" },
      {
        title: "Smart devices used",
        help: "Select the technology badges you use.",
        type: "multi",
        key: "smartDevices",
        value: [],
        options: [
          { value: "watch", label: "Smartwatch", icon: "⌚", helper: "Wearable device." },
          { value: "earbuds", label: "Earbuds", icon: "🎧", helper: "Wireless audio." },
          { value: "smartHome", label: "Smart Home", icon: "🏠", helper: "Connected home devices." },
          { value: "glasses", label: "Smart Glasses", icon: "🕶", helper: "Smart eyewear." }
        ]
      },
      { title: "Device usage after work", help: "Drag from work end toward sleep.", type: "range", key: "afterWorkUsage", value: 3, min: 0, max: 8, step: 1, suffix: " hrs" }
    ]
  },
  {
    id: "behaviour",
    name: "Sustainability Behaviour",
    badge: "Green Mindset Badge Unlocked",
    xp: 65,
    awareness: 15,
    questions: [
      { title: "How important is sustainability?", help: "Rate with leaves.", type: "rating", key: "importance", value: 3, max: 5 },
      {
        title: "Sustainability challenges",
        help: "Pick the barriers that affect you.",
        type: "multi",
        key: "challenges",
        value: [],
        options: [
          { value: "time", label: "Time", icon: "⏳", helper: "Hard to fit into routine." },
          { value: "cost", label: "Cost", icon: "💰", helper: "Feels expensive." },
          { value: "awareness", label: "Awareness", icon: "📉", helper: "Need clearer information." },
          { value: "access", label: "Accessibility", icon: "🚫", helper: "Options are not easy to access." }
        ]
      },
      {
        title: "Sustainability participation",
        help: "Select missions you already join.",
        type: "multi",
        key: "participation",
        value: [],
        options: [
          { value: "tree", label: "Tree Planting", icon: "🌳", helper: "Nature-based action." },
          { value: "recycling", label: "Recycling", icon: "♻", helper: "Material recovery." },
          { value: "renewable", label: "Renewable Energy", icon: "☀", helper: "Clean energy support." },
          { value: "mobility", label: "Green Mobility", icon: "🚲", helper: "Low-carbon movement." }
        ]
      },
      {
        title: "Carbon offset interest",
        help: "Would you offset unavoidable emissions?",
        type: "choice",
        key: "offset",
        options: [
          { value: "yes", label: "Yes", icon: "🌍", helper: "Ready to explore offsets." },
          { value: "maybe", label: "Maybe", icon: "🤔", helper: "Need more trust and clarity." },
          { value: "no", label: "No", icon: "✖", helper: "Prefer reduction first." }
        ]
      }
    ]
  },
  {
    id: "gamification",
    name: "Gamification",
    badge: "Quest Builder Badge Unlocked",
    xp: 45,
    awareness: 10,
    questions: [
      {
        title: "Would rewards motivate you?",
        help: "Choose your reaction.",
        type: "choice",
        key: "rewardMotivation",
        options: [
          { value: "absolutely", label: "Absolutely", icon: "😍", helper: "Rewards would help me continue." },
          { value: "maybe", label: "Maybe", icon: "🙂", helper: "Depends on the reward." },
          { value: "notSure", label: "Not Sure", icon: "😐", helper: "Need to see it first." },
          { value: "no", label: "No", icon: "🙁", helper: "Rewards do not matter much." }
        ]
      },
      {
        title: "Preferred engagement style",
        help: "Pick what would keep you coming back.",
        type: "choice",
        key: "engagement",
        options: [
          { value: "leaderboard", label: "Leaderboard", icon: "🏆", helper: "Compare progress." },
          { value: "badges", label: "Badges", icon: "🎖", helper: "Unlock achievements." },
          { value: "analytics", label: "Analytics", icon: "📊", helper: "Track data deeply." },
          { value: "impact", label: "Impact Tracker", icon: "🌱", helper: "See real-world outcomes." }
        ]
      },
      {
        title: "Platform usage frequency",
        help: "Choose your ideal check-in rhythm.",
        type: "choice",
        key: "usageFrequency",
        options: [
          { value: "daily", label: "Daily", icon: "1", helper: "Quick daily habit." },
          { value: "weekly", label: "Weekly", icon: "7", helper: "Weekly reflection." },
          { value: "monthly", label: "Monthly", icon: "30", helper: "Monthly score check." },
          { value: "rarely", label: "Rarely", icon: "∞", helper: "Only when needed." }
        ]
      }
    ]
  },
  {
    id: "workplace",
    name: "Workplace ESG",
    badge: "ESG Champion Badge Unlocked",
    xp: 40,
    awareness: 10,
    questions: [
      {
        title: "Should companies track employee sustainability?",
        help: "Vote with your instinct.",
        type: "choice",
        key: "companyTracking",
        options: [
          { value: "yes", label: "Yes", icon: "👍", helper: "Useful for workplace ESG." },
          { value: "maybe", label: "Maybe", icon: "🤔", helper: "Depends on privacy and use." },
          { value: "no", label: "No", icon: "👎", helper: "Should stay personal." }
        ]
      },
      {
        title: "Workplace sustainability participation",
        help: "Which missions would you join?",
        type: "multi",
        key: "workplaceParticipation",
        value: [],
        options: [
          { value: "commute", label: "Green Commute", icon: "🚲", helper: "Low-carbon work travel." },
          { value: "plantation", label: "Plantation Drive", icon: "🌳", helper: "Team nature action." },
          { value: "energy", label: "Energy Saving", icon: "⚡", helper: "Office energy reduction." },
          { value: "office", label: "Office Sustainability", icon: "♻", helper: "Workplace waste and resources." }
        ]
      }
    ]
  },
  {
    id: "reflection",
    name: "Open-Ended Reflection",
    badge: "Sustainability Storyteller Badge Unlocked",
    xp: 50,
    awareness: 10,
    questions: [
      { title: "Biggest sustainability challenge?", help: "What is one thing preventing you from living more sustainably?", type: "text", key: "biggestChallenge", placeholder: "Example: Sustainable choices are hard to find near me." },
      { title: "Platform feature suggestions", help: "Share your best idea.", type: "text", key: "featureIdea", placeholder: "Example: Show nearby recycling points or green commute rewards." },
      { title: "Sustainable living means...", help: "Complete the reflection card.", type: "text", key: "sustainableLiving", placeholder: "Sustainable living means..." }
    ]
  }
];

const questions = sections.flatMap((section) => section.questions.map((question) => ({ ...question, sectionId: section.id, sectionName: section.name, value: question.value ?? "" })));

const factors = {
  transport: { car: 0.192, bike: 0.103, metro: 0.041, bus: 0.089, walk: 0, cycle: 0 },
  fuel: { petrol: 1, diesel: 1.14, ev: 0.24, hybrid: 0.68, cng: 0.72 },
  cooking: { lpg: 42, induction: 18, png: 29, mixed: 34 },
  diet: { vegetarian: 135, vegan: 85, eggetarian: 150, nonveg: 220 },
  longTravel: { train: 10, bus: 18, flight: 70, car: 40 }
};

const colors = {
  commute: "#2f7048",
  home: "#d5a46b",
  food: "#6b8f48",
  digital: "#4f91a8",
  travel: "#c96e54"
};

let currentIndex = 0;
let rewardSectionId = null;

const counter = document.querySelector("#questionCounter");
const progressBar = document.querySelector("#progressBar");
const sectionName = document.querySelector("#sectionName");
const title = document.querySelector("#questionTitle");
const help = document.querySelector("#questionHelp");
const answerArea = document.querySelector("#answerArea");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const continueButton = document.querySelector("#continueButton");
const landingScreen = document.querySelector("#landingScreen");
const quizStage = document.querySelector(".quiz-stage");
const rewardScreen = document.querySelector("#rewardScreen");
const loginScreen = document.querySelector("#loginScreen");
const feedbackScreen = document.querySelector("#feedbackScreen");
const resultsScreen = document.querySelector("#resultsScreen");
const celebrationModal = document.querySelector("#celebrationModal");
let isLoggedIn = false;
let screenBeforeLogin = "landing";
let walletPoints = 0;
const awardedSections = new Set();

function currentQuestion() {
  return questions[currentIndex];
}

function sectionFor(id) {
  return sections.find((section) => section.id === id);
}

function isQuestionVisible(question) {
  if (question.key === "nonVegMeals") return getValue("diet", "") === "nonveg";
  return true;
}

function visibleQuestions() {
  return questions.filter(isQuestionVisible);
}

function currentVisibleIndex() {
  return visibleQuestions().findIndex((question) => question === currentQuestion());
}

function findNextVisibleIndex(fromIndex) {
  for (let index = fromIndex + 1; index < questions.length; index += 1) {
    if (isQuestionVisible(questions[index])) return index;
  }
  return -1;
}

function findPreviousVisibleIndex(fromIndex) {
  for (let index = fromIndex - 1; index >= 0; index -= 1) {
    if (isQuestionVisible(questions[index])) return index;
  }
  return -1;
}

function getValue(key, fallback) {
  const question = questions.find((item) => item.key === key);
  const value = question ? question.value : "";
  if (Array.isArray(value)) return value.length ? value : fallback;
  return value !== "" ? value : fallback;
}

function renderQuestion() {
  const question = currentQuestion();
  const visible = visibleQuestions();
  const visibleIndex = currentVisibleIndex();
  counter.textContent = `Question ${visibleIndex + 1} of ${visible.length}`;
  progressBar.style.width = `${((visibleIndex + 1) / visible.length) * 100}%`;
  sectionName.textContent = question.sectionName;
  title.textContent = question.title;
  help.textContent = question.help;
  backButton.disabled = findPreviousVisibleIndex(currentIndex) === -1;
  nextButton.textContent = findNextVisibleIndex(currentIndex) === -1 ? "Finish quiz →" : "Next →";
  nextButton.disabled = !hasAnswer(question);

  if (question.type === "choice") renderChoice(question);
  if (question.type === "multi" || question.type === "days") renderMulti(question);
  if (question.type === "range") renderRange(question);
  if (question.type === "rating") renderRating(question);
  if (question.type === "select") renderSelect(question);
  if (question.type === "text") renderText(question);
}

function hasAnswer(question) {
  if (question.type === "text") return true;
  if (question.type === "multi") return true;
  if (question.type === "days") return question.value.length > 0;
  if (Array.isArray(question.value)) return question.value.length > 0;
  return question.type === "range" || question.type === "select" || question.type === "rating" || question.value !== "";
}

function renderChoice(question) {
  answerArea.innerHTML = question.options.map((option) => answerButton(question, option)).join("");
  answerArea.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => {
      question.value = button.dataset.value;
      renderQuestion();
    });
  });
}

function renderMulti(question) {
  const options = question.type === "days" ? question.options.map((day) => ({ value: day, label: day, icon: day.slice(0, 1), helper: "Travel day" })) : question.options;
  answerArea.innerHTML = options.map((option) => answerButton(question, option, true)).join("");
  answerArea.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = new Set(question.value);
      if (selected.has(button.dataset.value)) selected.delete(button.dataset.value);
      else selected.add(button.dataset.value);
      question.value = Array.from(selected);
      renderQuestion();
    });
  });
}

function answerButton(question, option, multi = false) {
  const selected = multi ? question.value.includes(option.value) : question.value === option.value;
  return `
    <button class="answer-option ${selected ? "selected" : ""}" type="button" data-value="${option.value}">
      <span class="answer-icon" aria-hidden="true">${option.icon}</span>
      <span class="answer-copy">
        <strong>${option.label}</strong>
        <small>${option.helper}</small>
      </span>
      <span class="answer-check" aria-hidden="true">✓</span>
    </button>
  `;
}

function renderRange(question) {
  answerArea.innerHTML = `
    <div class="range-answer">
      <div class="range-readout">
        <span>${question.title}</span>
        <strong id="rangeValue">${question.value}${question.suffix}</strong>
      </div>
      <input type="range" min="${question.min}" max="${question.max}" step="${question.step}" value="${question.value}" />
      <div class="tick-row">
        <span>${question.min}${question.suffix}</span>
        <span>${question.max}${question.suffix}</span>
      </div>
    </div>
  `;
  const input = answerArea.querySelector("input");
  const readout = answerArea.querySelector("#rangeValue");
  input.addEventListener("input", () => {
    question.value = Number(input.value);
    readout.textContent = `${question.value}${question.suffix}`;
    nextButton.disabled = false;
  });
}

function renderRating(question) {
  answerArea.innerHTML = `
    <div class="rating-answer">
      ${Array.from({ length: question.max }, (_, index) => `
        <button class="rating-leaf ${question.value >= index + 1 ? "selected" : ""}" type="button" data-value="${index + 1}" aria-label="${index + 1} leaves">&#127811;</button>
      `).join("")}
    </div>
  `;
  answerArea.querySelectorAll(".rating-leaf").forEach((button) => {
    button.addEventListener("click", () => {
      question.value = Number(button.dataset.value);
      renderQuestion();
    });
  });
}

function renderSelect(question) {
  answerArea.innerHTML = `
    <div class="select-answer">
      <select aria-label="${question.title}">
        ${question.options.map((option) => `<option ${question.value === option ? "selected" : ""}>${option}</option>`).join("")}
      </select>
    </div>
  `;
  answerArea.querySelector("select").addEventListener("change", (event) => {
    question.value = event.target.value;
    nextButton.disabled = false;
  });
}

function renderText(question) {
  answerArea.innerHTML = `
    <label class="text-answer">
      <textarea rows="5" placeholder="${question.placeholder || ""}">${question.value}</textarea>
    </label>
  `;
  answerArea.querySelector("textarea").addEventListener("input", (event) => {
    question.value = event.target.value;
  });
  nextButton.disabled = false;
}

function goNext() {
  if (!hasAnswer(currentQuestion())) return;
  const finishedSectionId = currentQuestion().sectionId;
  const nextIndex = findNextVisibleIndex(currentIndex);
  if (nextIndex === -1) {
    showReward(finishedSectionId);
    return;
  }
  currentIndex = nextIndex;
  if (currentQuestion().sectionId !== finishedSectionId) {
    currentIndex = questions.findLastIndex ? questions.findLastIndex((question, index) => index < nextIndex && isQuestionVisible(question) && question.sectionId === finishedSectionId) : currentIndex;
    if (currentIndex === -1) currentIndex = nextIndex - 1;
    showReward(finishedSectionId);
    return;
  }
  renderQuestion();
}

function goBack() {
  const previousIndex = findPreviousVisibleIndex(currentIndex);
  if (previousIndex === -1) return;
  currentIndex = previousIndex;
  renderQuestion();
}

function showReward(sectionId) {
  const section = sectionFor(sectionId);
  rewardSectionId = sectionId;
  const rewardWalletVisual = document.querySelector("#rewardWalletVisual");
  if (!awardedSections.has(sectionId)) {
    awardedSections.add(sectionId);
    walletPoints += section.xp;
    updateWallet(true);
  }
  quizStage.hidden = true;
  landingScreen.hidden = true;
  loginScreen.hidden = true;
  feedbackScreen.hidden = true;
  resultsScreen.hidden = true;
  rewardScreen.hidden = false;
  document.querySelector("#walletPill").hidden = true;
  document.querySelector("#rewardSection").textContent = section.name;
  document.querySelector("#rewardXp").textContent = `+${section.xp} Green Points 🌱`;
  document.querySelector("#rewardWalletBalance").textContent = walletPoints;
  document.querySelector("#rewardAwareness").textContent = `Carbon Awareness Score +${section.awareness} 🌍`;
  document.querySelector("#rewardBadge").textContent = `🏅 ${section.badge}`;
  continueButton.textContent = findNextVisibleIndex(currentIndex) === -1 ? "See my score →" : "Continue →";
  rewardWalletVisual.classList.remove("collecting");
  void rewardWalletVisual.offsetWidth;
  rewardWalletVisual.classList.add("collecting");
}

function continueFromReward() {
  rewardScreen.hidden = true;
  document.querySelector("#walletPill").hidden = false;
  const nextIndex = findNextVisibleIndex(currentIndex);
  if (nextIndex === -1) {
    showResults();
    return;
  }
  currentIndex = nextIndex;
  quizStage.hidden = false;
  renderQuestion();
}

function householdPeople() {
  return Number(getValue("household", 4)) || 4;
}

function calculate() {
  const transport = getValue("transport", "car");
  const travelDays = getValue("travelDays", ["Mon", "Tue", "Wed"]).length;
  const distance = Number(getValue("distance", 12));
  const fuel = getValue("fuel", "petrol");
  const commuteMode = transport === "cycle" ? "walk" : transport;
  const commute = distance * 2 * travelDays * 4.33 * (factors.transport[commuteMode] || 0.12) * (factors.fuel?.[fuel] || 1);
  const acHours = Number(getValue("acHours", 4));
  const appliances = getValue("appliances", []);
  const homeKwh = 50 + acHours * 1.2 * 30 + appliances.length * 7 + Number(getValue("deviceUsage", 60)) * 0.4;
  const home = (homeKwh * 0.716 + factors.cooking[getValue("cooking", "lpg")]) / householdPeople();
  const food = factors.diet[getValue("diet", "vegetarian")] + Number(getValue("nonVegMeals", 0)) * 4 + Number(getValue("dairy", 50)) * 0.35 + Number(getValue("deliveries", 4)) * 2;
  const digital = Number(getValue("deviceCount", 3)) * 8 + getValue("smartDevices", []).length * 5 + Number(getValue("afterWorkUsage", 3)) * 4;
  const travel = Number(getValue("flights", 1)) * 85 / 12 + factors.longTravel[getValue("longTravel", "train")];
  const total = commute + home + food + digital + travel;
  return {
    total,
    annual: (total * 12) / 1000,
    categories: [
      { key: "commute", label: "Mobility", value: commute },
      { key: "home", label: "Home energy", value: home },
      { key: "food", label: "Food & lifestyle", value: food },
      { key: "digital", label: "Digital lifestyle", value: digital },
      { key: "travel", label: "Travel", value: travel }
    ]
  };
}

function buildPayload() {

    const result = calculate();

    const payload = {

Respondent_Master: {

    Response_ID: "",

    Timestamp: "",

    Name: "",

    Email: "",

    City: getValue("location", "").split(",")[0].trim(),

    State: getValue("location", "").includes(",")
        ? getValue("location", "").split(",")[1].trim()
        : "",

    Occupation: "",

    Age_Group: "",

    Carbon_Score: Math.round(result.total),

    Monthly_CO2_kg: Math.round(result.total),

    Annual_CO2_t: Number(result.annual.toFixed(2)),

    Green_Points: walletPoints,

    Badge: awardedSections.size + " Badges",

    Quiz_Version: "1.0",

    Certificate_Generated: false,

    Consent_Given: true,

    Device_Type:
        /Mobi|Android/i.test(navigator.userAgent)
            ? "Mobile"
            : "Desktop",

    Browser: navigator.userAgent,

    Completion_Time_sec: 0,

    Quiz_Completed: true,

    Source: window.location.hostname

},
        Quiz_Responses: {

    Lifestyle: getValue("lifestyle", ""),

    Location: getValue("location", ""),

    Household: getValue("household", ""),

    Pets: getValue("pets", ""),

    Transport: getValue("transport", ""),

    Commute_Distance_km: getValue("distance", ""),

    Travel_Days: getValue("travelDays", []).length,

    Fuel: getValue("fuel", ""),

    Metro_Access: getValue("metroAccess", ""),

    Long_Distance_Travel: getValue("longTravel", ""),

    Flights_Per_Year: getValue("flights", ""),

    AC_Hours: getValue("acHours", ""),

    Appliances: getValue("appliances", []).join(", "),

    Device_Usage: getValue("deviceUsage", ""),

    Cooking_Source: getValue("cooking", ""),

    Home_Tech: getValue("homeTech", []).join(", "),

    Diet: getValue("diet", ""),

    NonVeg_Meals: getValue("nonVegMeals", ""),

    Dairy: getValue("dairy", ""),

    Food_Delivery: getValue("deliveries", ""),

    Reusable_Items: getValue("reusables", []).join(", "),

    Device_Count: getValue("deviceCount", ""),

    Smart_Devices: getValue("smartDevices", []).join(", "),

    After_Work_Usage: getValue("afterWorkUsage", ""),

    Sustainability_Importance: getValue("importance", ""),

    Challenges: getValue("challenges", []).join(", "),

    Participation: getValue("participation", []).join(", "),

    Offset_Interest: getValue("offset", ""),

    Reward_Motivation: getValue("rewardMotivation", ""),

    Engagement_Style: getValue("engagement", ""),

    Platform_Usage: getValue("usageFrequency", ""),

    Employee_Sustainability: getValue("companyTracking", ""),

    Workplace_Participation: getValue("workplaceParticipation", []).join(", "),

    Biggest_Challenge: getValue("biggestChallenge", ""),

    Feature_Suggestions: getValue("featureIdea", ""),

    Sustainable_Living_Definition: getValue("sustainableLiving", "")

},

       Carbon_Breakdown: {

    Mobility_CO2_kg:
        Number(result.categories.find(c => c.key === "commute")?.value.toFixed(2) || 0),

    Home_Energy_CO2_kg:
        Number(result.categories.find(c => c.key === "home")?.value.toFixed(2) || 0),

    Food_Lifestyle_CO2_kg:
        Number(result.categories.find(c => c.key === "food")?.value.toFixed(2) || 0),

    Digital_Lifestyle_CO2_kg:
        Number(result.categories.find(c => c.key === "digital")?.value.toFixed(2) || 0),

    Travel_CO2_kg:
        Number(result.categories.find(c => c.key === "travel")?.value.toFixed(2) || 0),

    Total_Monthly_CO2_kg:
        Number(result.total.toFixed(2)),

    Annual_CO2_t:
        Number(result.annual.toFixed(2))

},

        totalScore: Math.round(result.total),

        annualScore: result.annual,

        wallet: {

            greenPoints: walletPoints,

            badgesUnlocked: awardedSections.size

        },

        Recommendations: {

    Recommendation_1: buildRecommendations(result)[0] || "",

    Recommendation_2: buildRecommendations(result)[1] || "",

    Recommendation_3: buildRecommendations(result)[2] || "",

    Priority:
        result.categories
            .sort((a, b) => b.value - a.value)[0]
            .label,

    Potential_CO2_Reduction:
        Math.round(
            result.categories
                .sort((a, b) => b.value - a.value)[0]
                .value * 0.15
        ) + " kg CO₂/month",

    Status: "Pending"

}
    };

    return payload;
}
async function showResults() {
  const result = calculate();
  const rounded = Math.round(result.total);
  const max = Math.max(...result.categories.map((category) => category.value), 1);
  quizStage.hidden = true;
  rewardScreen.hidden = true;
  loginScreen.hidden = true;
  feedbackScreen.hidden = true;
  resultsScreen.hidden = false;
  celebrationModal.hidden = false;
  document.querySelector("#scoreValue").textContent = rounded;
  document.querySelector("#celebrationScore").textContent = rounded;
  document.querySelector("#celebrationCopy").textContent = `You completed the quiz and collected ${walletPoints} Green Points in your wallet.`;
  document.querySelector(".score-orbit").style.setProperty("--score-angle", `${Math.min(result.total / 900, 1) * 360}deg`);
  document.querySelector("#resultTitle").textContent = rounded < 350 ? "You are in a strong green zone." : "You have clear ways to reduce your score.";
  document.querySelector("#resultCopy").textContent = `Estimated annual footprint: ${result.annual.toFixed(1)} t CO2e. Your wallet has ${walletPoints} Green Points.`;
  document.querySelector("#breakdownList").innerHTML = result.categories.map((category) => `
    <div class="breakdown-item">
      <div class="breakdown-top">
        <span>${category.label}</span>
        <span>${Math.round(category.value)} kg</span>
      </div>
      <div class="mini-track"><span style="width:${Math.max((category.value / max) * 100, 3)}%; --bar-color:${colors[category.key]}"></span></div>
    </div>
  `).join("");
  document.querySelector("#recommendations").innerHTML = buildRecommendations(result).map((tip) => `<li>${tip}</li>`).join("");
  await saveQuizResponse(buildPayload());
}

function activeScreenName() {
  if (!landingScreen.hidden) return "landing";
  if (!quizStage.hidden) return "quiz";
  if (!rewardScreen.hidden) return "reward";
  if (!feedbackScreen.hidden) return "feedback";
  if (!resultsScreen.hidden) return "results";
  return "landing";
}

function showOnly(screenName) {
  landingScreen.hidden = screenName !== "landing";
  quizStage.hidden = screenName !== "quiz";
  rewardScreen.hidden = screenName !== "reward";
  loginScreen.hidden = screenName !== "login";
  feedbackScreen.hidden = screenName !== "feedback";
  resultsScreen.hidden = screenName !== "results";
}

function showLogin() {
  screenBeforeLogin = activeScreenName();
  showOnly("login");
}

function backFromLogin() {
  showOnly(screenBeforeLogin);
}

function completeLogin(provider) {
  const loginUrls = {
    Google: "https://accounts.google.com/",
    Microsoft: "https://login.microsoftonline.com/"
  };
  window.open(loginUrls[provider], "_blank", "noopener");
  isLoggedIn = true;
  document.querySelector("#loginButton").textContent = `${provider} user`;
  backFromLogin();
}

function updateWallet(animate = false) {
  const points = document.querySelector("#walletPoints");
  const pill = document.querySelector("#walletPill");
  points.textContent = walletPoints;
  if (animate) {
    pill.classList.remove("wallet-pop");
    void pill.offsetWidth;
    pill.classList.add("wallet-pop");
  }
}

function closeQuiz() {
  screenBeforeLogin = activeScreenName();
  showOnly("feedback");
}

function cancelCloseQuiz() {
  showOnly(screenBeforeLogin === "feedback" ? "reward" : screenBeforeLogin);
}

function confirmCloseQuiz() {
  window.location.href = "quiz.html";
}

function quitQuiz() {
  closeQuiz();
}

function buildRecommendations(result) {
  return [...result.categories].sort((a, b) => b.value - a.value).slice(0, 3).map((category) => {
    if (category.key === "commute") return "<strong>Mobility:</strong> reduce one high-emission travel day or shift short trips to public transport, walk, or cycle.";
    if (category.key === "home") return "<strong>Home energy:</strong> reduce AC hours, choose efficient appliances, and add home sustainability badges where possible.";
    if (category.key === "food") return "<strong>Food & lifestyle:</strong> reduce delivery packaging, plan groceries, and add reusable habits.";
    if (category.key === "digital") return "<strong>Digital lifestyle:</strong> extend device life and reduce idle device usage after work.";
    return "<strong>Travel:</strong> choose train or bus for suitable long-distance trips and offset unavoidable flights.";
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function downloadScore() {
  if (!isLoggedIn) {
    screenBeforeLogin = "results";
    showOnly("login");
    return;
  }
  const result = calculate();
  const rounded = Math.round(result.total);
  const max = Math.max(...result.categories.map((category) => category.value), 1);
  const issuedOn = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  const breakdown = result.categories.map((category) => {
    const width = Math.max((category.value / max) * 100, 3);
    return `
      <div class="breakdown-row">
        <div><strong>${escapeHtml(category.label)}</strong><span>${Math.round(category.value)} kg CO2e/month</span></div>
        <div class="bar"><i style="width:${width}%;background:${colors[category.key]}"></i></div>
      </div>
    `;
  }).join("");
  const recommendations = buildRecommendations(result).map((tip) => `<li>${tip}</li>`).join("");
  const responses = questions.map((question) => {
    const answer = Array.isArray(question.value) ? question.value.join(", ") : question.value || "Not answered";
    return `<tr><td>${escapeHtml(question.title)}</td><td>${escapeHtml(answer)}</td></tr>`;
  }).join("");
  const certificate = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Carbon Credit Certificate</title>
  <style>
    :root { --ink:#102119; --muted:#5d6a60; --leaf:#2f7048; --paper:#fbfaf5; --line:#ded8ca; --sun:#d5a46b; }
    * { box-sizing:border-box; }
    body { margin:0; background:var(--paper); color:var(--ink); font-family:Inter,Segoe UI,Arial,sans-serif; }
    .page { width:min(980px, calc(100% - 32px)); margin:28px auto; }
    .certificate { position:relative; overflow:hidden; border:10px solid #e4dbc6; border-radius:24px; background:white; box-shadow:0 18px 60px rgba(26,38,31,.14); }
    .certificate:before { content:""; position:absolute; inset:18px; border:2px solid rgba(47,112,72,.26); border-radius:14px; pointer-events:none; }
    .hero { padding:48px 52px 34px; text-align:center; background:linear-gradient(180deg,#f7fff5,#fffdf8); }
    .seal { width:92px; height:92px; display:grid; place-items:center; margin:0 auto 18px; border-radius:50%; background:radial-gradient(circle at 35% 28%, #fff5a8, #e2ab2e 62%, #a86e12); color:var(--leaf); font-size:2.2rem; font-weight:900; box-shadow:0 12px 28px rgba(168,110,18,.24); }
    .kicker { margin:0 0 10px; color:var(--leaf); font-weight:900; letter-spacing:.16em; text-transform:uppercase; font-size:.76rem; }
    h1 { margin:0; font-size:clamp(2.4rem,6vw,4.8rem); line-height:.98; }
    .awarded { margin:18px auto 0; max-width:660px; color:var(--muted); font-size:1.12rem; line-height:1.55; }
    .score-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--line); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
    .score-grid div { background:#fff; padding:22px; text-align:center; }
    .score-grid strong { display:block; color:var(--leaf); font-size:2rem; line-height:1; }
    .score-grid span { display:block; margin-top:8px; color:var(--muted); font-weight:800; }
    .content { display:grid; gap:26px; padding:34px 52px 46px; }
    h2 { margin:0 0 16px; font-size:1.35rem; }
    .breakdown-row { display:grid; grid-template-columns:220px 1fr; gap:18px; align-items:center; margin:14px 0; }
    .breakdown-row span { display:block; margin-top:4px; color:var(--muted); font-size:.92rem; }
    .bar { height:14px; overflow:hidden; border-radius:999px; background:#e9e5da; }
    .bar i { display:block; height:100%; border-radius:inherit; }
    ol { margin:0; padding-left:24px; color:var(--muted); line-height:1.55; }
    li strong { color:var(--ink); }
    table { width:100%; border-collapse:collapse; font-size:.9rem; }
    td { border-top:1px solid var(--line); padding:10px 8px; vertical-align:top; }
    td:first-child { width:58%; font-weight:800; }
    .footer { display:flex; justify-content:space-between; gap:16px; color:var(--muted); border-top:1px solid var(--line); padding-top:18px; font-weight:800; }
    @media print { body { background:white; } .page { width:100%; margin:0; } .certificate { box-shadow:none; } }
    @media (max-width:720px) { .hero,.content { padding-left:24px; padding-right:24px; } .score-grid { grid-template-columns:1fr; } .breakdown-row { grid-template-columns:1fr; gap:8px; } .footer { display:grid; } }
  </style>
</head>
<body>
  <main class="page">
    <section class="certificate">
      <div class="hero">
        <div class="seal">GP</div>
        <p class="kicker">Certificate of Carbon Awareness</p>
        <h1>My Carbon Credit</h1>
        <p class="awarded">This certificate recognizes completion of the Green Score Quiz and records an estimated personal carbon footprint with earned Green Points.</p>
      </div>
      <div class="score-grid">
        <div><strong>${rounded}</strong><span>kg CO2e / month</span></div>
        <div><strong>${result.annual.toFixed(1)}</strong><span>t CO2e / year</span></div>
        <div><strong>${walletPoints}</strong><span>Green Points</span></div>
      </div>
      <div class="content">
        <section>
          <h2>Footprint Breakdown</h2>
          ${breakdown}
        </section>
        <section>
          <h2>Action Recommendations</h2>
          <ol>${recommendations}</ol>
        </section>
        <section>
          <h2>Quiz Response Record</h2>
          <table>${responses}</table>
        </section>
        <div class="footer">
          <span>Issued on ${issuedOn}</span>
          <span>My Carbon Credit Environmental Data Solutions</span>
        </div>
      </div>
    </section>
  </main>
</body>
</html>`;
  const blob = new Blob([certificate], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "my-carbon-credit-certificate.html";
  link.click();
  URL.revokeObjectURL(link.href);
}

function restart() {
  currentIndex = 0;
  questions.forEach((question) => {
    if (question.type === "choice" || question.type === "text") question.value = "";
    if (question.type === "multi") question.value = [];
  });
  walletPoints = 0;
  awardedSections.clear();
  updateWallet(false);
  quizStage.hidden = false;
  landingScreen.hidden = true;
  rewardScreen.hidden = true;
  loginScreen.hidden = true;
  feedbackScreen.hidden = true;
  resultsScreen.hidden = true;
  celebrationModal.hidden = true;
  renderQuestion();
}

function startQuiz() {
  landingScreen.hidden = true;
  quizStage.hidden = false;
  rewardScreen.hidden = true;
  loginScreen.hidden = true;
  feedbackScreen.hidden = true;
  resultsScreen.hidden = true;
  celebrationModal.hidden = true;
  renderQuestion();
}

nextButton.addEventListener("click", goNext);
backButton.addEventListener("click", goBack);
continueButton.addEventListener("click", continueFromReward);
document.querySelector("#startQuizButton").addEventListener("click", startQuiz);
document.querySelector("#restartButton").addEventListener("click", restart);
document.querySelector("#downloadButton").addEventListener("click", downloadScore);
document.querySelector("#downloadFromCelebrationButton").addEventListener("click", downloadScore);
document.querySelector("#viewResultsButton").addEventListener("click", () => {
  celebrationModal.hidden = true;
});
document.querySelector("#loginButton").addEventListener("click", showLogin);
document.querySelector("#backFromLoginButton").addEventListener("click", backFromLogin);
document.querySelector("#googleLoginButton").addEventListener("click", () => completeLogin("Google"));
document.querySelector("#microsoftLoginButton").addEventListener("click", () => completeLogin("Microsoft"));
document.querySelector("#quitFromRewardButton").addEventListener("click", quitQuiz);
document.querySelector("#cancelCloseButton").addEventListener("click", cancelCloseQuiz);
document.querySelector("#confirmCloseButton").addEventListener("click", confirmCloseQuiz);



updateWallet(false);
renderQuestion();
