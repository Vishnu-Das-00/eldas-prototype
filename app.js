// Sample Data
const sampleExams = [
  {
    id: 1,
    title: 'Daily Math Assessment',
    subject: 'Mathematics',
    questions: 10,
    timeLimit: 30,
    date: 'Today',
    status: 'Available'
  },
  {
    id: 2,
    title: 'Science Quiz - Photosynthesis',
    subject: 'Science',
    questions: 8,
    timeLimit: 20,
    date: 'Today',
    status: 'Available'
  },
  {
    id: 3,
    title: 'English Grammar Test',
    subject: 'English',
    questions: 12,
    timeLimit: 25,
    date: 'Today',
    status: 'Available'
  }
];

const examQuestions = {
  1: [
    {
      question: 'If 2x + 5 = 15, what is the value of x?',
      options: ['A) 5', 'B) 7', 'C) 10', 'D) 3'],
      correct: 0
    },
    {
      question: 'What is 15% of 200?',
      options: ['A) 25', 'B) 30', 'C) 35', 'D) 20'],
      correct: 1
    },
    {
      question: 'The area of a rectangle with length 8cm and width 5cm is:',
      options: ['A) 13 cm²', 'B) 26 cm²', 'C) 40 cm²', 'D) 80 cm²'],
      correct: 2
    },
    {
      question: 'Solve: 3(x - 2) = 15',
      options: ['A) x = 5', 'B) x = 7', 'C) x = 9', 'D) x = 11'],
      correct: 1
    },
    {
      question: 'What is the value of √144?',
      options: ['A) 10', 'B) 11', 'C) 12', 'D) 14'],
      correct: 2
    },
    {
      question: 'If a triangle has angles 45° and 60°, what is the third angle?',
      options: ['A) 65°', 'B) 70°', 'C) 75°', 'D) 80°'],
      correct: 2
    },
    {
      question: 'Express 3/4 as a percentage:',
      options: ['A) 70%', 'B) 75%', 'C) 80%', 'D) 85%'],
      correct: 1
    },
    {
      question: 'What is 8² - 5²?',
      options: ['A) 29', 'B) 39', 'C) 49', 'D) 59'],
      correct: 1
    },
    {
      question: 'A train travels 240 km in 3 hours. What is its average speed?',
      options: ['A) 60 km/h', 'B) 70 km/h', 'C) 80 km/h', 'D) 90 km/h'],
      correct: 2
    },
    {
      question: 'Simplify: 2x + 3x - x',
      options: ['A) 3x', 'B) 4x', 'C) 5x', 'D) 6x'],
      correct: 1
    }
  ],
  2: [
    {
      question: 'What gas do plants absorb during photosynthesis?',
      options: ['A) Oxygen', 'B) Carbon Dioxide', 'C) Nitrogen', 'D) Hydrogen'],
      correct: 1
    },
    {
      question: 'Which organelle is responsible for photosynthesis?',
      options: ['A) Mitochondria', 'B) Nucleus', 'C) Chloroplast', 'D) Ribosome'],
      correct: 2
    },
    {
      question: 'What is the green pigment in plants called?',
      options: ['A) Carotene', 'B) Chlorophyll', 'C) Xanthophyll', 'D) Melanin'],
      correct: 1
    },
    {
      question: 'What is the main product of photosynthesis?',
      options: ['A) Water', 'B) Carbon dioxide', 'C) Glucose', 'D) Oxygen'],
      correct: 2
    },
    {
      question: 'Where does photosynthesis primarily occur in a plant?',
      options: ['A) Roots', 'B) Stem', 'C) Leaves', 'D) Flowers'],
      correct: 2
    },
    {
      question: 'What form of energy is needed for photosynthesis?',
      options: ['A) Chemical', 'B) Light', 'C) Heat', 'D) Mechanical'],
      correct: 1
    },
    {
      question: 'What is released as a byproduct of photosynthesis?',
      options: ['A) Nitrogen', 'B) Carbon dioxide', 'C) Oxygen', 'D) Hydrogen'],
      correct: 2
    },
    {
      question: 'Which part of the chloroplast contains chlorophyll?',
      options: ['A) Stroma', 'B) Thylakoid', 'C) Matrix', 'D) Cristae'],
      correct: 1
    }
  ],
  3: [
    {
      question: 'Choose the correct verb form: She ___ to school every day.',
      options: ['A) go', 'B) goes', 'C) going', 'D) gone'],
      correct: 1
    },
    {
      question: 'What is the plural form of "child"?',
      options: ['A) childs', 'B) childes', 'C) children', 'D) childrens'],
      correct: 2
    },
    {
      question: 'Which sentence is correct?',
      options: [
        'A) Their going to the park',
        'B) There going to the park',
        "C) They're going to the park",
        'D) Theyre going to the park'
      ],
      correct: 2
    },
    {
      question: 'What is the past tense of "run"?',
      options: ['A) runned', 'B) ran', 'C) run', 'D) running'],
      correct: 1
    },
    {
      question: 'Identify the adjective: "The beautiful garden bloomed."',
      options: ['A) The', 'B) beautiful', 'C) garden', 'D) bloomed'],
      correct: 1
    },
    {
      question: 'Which word is a pronoun?',
      options: ['A) quickly', 'B) house', 'C) she', 'D) write'],
      correct: 2
    },
    {
      question: 'What is the superlative form of "good"?',
      options: ['A) gooder', 'B) more good', 'C) best', 'D) goodest'],
      correct: 2
    },
    {
      question: 'Choose the correct article: "___ apple a day keeps the doctor away."',
      options: ['A) A', 'B) An', 'C) The', 'D) No article'],
      correct: 1
    },
    {
      question: 'What type of sentence is this? "Stop!"',
      options: ['A) Declarative', 'B) Interrogative', 'C) Imperative', 'D) Exclamatory'],
      correct: 2
    },
    {
      question: 'Identify the verb: "The cat jumped over the fence."',
      options: ['A) cat', 'B) jumped', 'C) over', 'D) fence'],
      correct: 1
    },
    {
      question: 'What is the comparative form of "happy"?',
      options: ['A) happyer', 'B) more happy', 'C) happier', 'D) most happy'],
      correct: 2
    },
    {
      question: 'Choose the correct spelling:',
      options: ['A) recieve', 'B) receive', 'C) recive', 'D) receeve'],
      correct: 1
    }
  ]
};

const recentResults = [
  { subject: 'Mathematics', score: 85, date: 'Oct 27', trend: 'up' },
  { subject: 'Science', score: 72, date: 'Oct 26', trend: 'down' },
  { subject: 'English', score: 88, date: 'Oct 25', trend: 'up' },
  { subject: 'Social Studies', score: 75, date: 'Oct 24', trend: 'stable' }
];

const classStudents = [
  { name: 'Rahul Sharma', overall: 78, trend: 'improving', alert: false },
  { name: 'Priya Patel', overall: 92, trend: 'stable', alert: false },
  { name: 'Arjun Kumar', overall: 64, trend: 'needs_attention', alert: true },
  { name: 'Sneha Reddy', overall: 88, trend: 'stable', alert: false },
  { name: 'Vikram Singh', overall: 58, trend: 'improving', alert: true }
];

// State Management
let currentRole = null;
let currentExam = null;
let currentQuestionIndex = 0;
let examAnswers = [];
let examTimer = null;
let timeRemaining = 0;

// Navigation Functions
function showView(viewId) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });

  // Show selected view
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Update navbar visibility
  const navbar = document.getElementById('navbar');
  if (viewId === 'landingPage') {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
}

function setRole(role) {
  currentRole = role;
  updateNavbar(role);

  // Navigate to appropriate dashboard
  if (role === 'student') {
    showView('studentDashboard');
    renderStudentDashboard();
  } else if (role === 'teacher') {
    showView('teacherDashboard');
    renderTeacherDashboard();
  } else if (role === 'parent') {
    showView('parentDashboard');
    renderParentDashboard();
  }
}

function updateNavbar(role) {
  const navLinks = document.getElementById('navLinks');
  navLinks.innerHTML = '';

  const links = {
    student: [
      { text: 'Dashboard', view: 'studentDashboard' },
      { text: 'My Exams', view: 'studentDashboard' },
      { text: 'Results', view: 'studentDashboard' }
    ],
    teacher: [
      { text: 'Dashboard', view: 'teacherDashboard' },
      { text: 'Create Exam', view: 'createExam' },
      { text: 'Analytics', view: 'teacherAnalytics' }
    ],
    parent: [
      { text: 'Dashboard', view: 'parentDashboard' },
      { text: 'Progress', view: 'parentDashboard' }
    ]
  };

  if (links[role]) {
    links[role].forEach(link => {
      const a = document.createElement('a');
      a.textContent = link.text;
      a.href = '#';
      a.onclick = (e) => {
        e.preventDefault();
        showView(link.view);
      };
      navLinks.appendChild(a);
    });
  }
}

// Student Dashboard Functions
function renderStudentDashboard() {
  // Render available exams
  const examsContainer = document.getElementById('availableExams');
  examsContainer.innerHTML = '';

  sampleExams.forEach(exam => {
    const examCard = document.createElement('div');
    examCard.className = 'exam-card';
    examCard.innerHTML = `
      <div class="exam-info">
        <h3>${exam.title}</h3>
        <div class="exam-meta">
          <span>📚 ${exam.subject}</span>
          <span>❓ ${exam.questions} questions</span>
          <span>⏱️ ${exam.timeLimit} minutes</span>
        </div>
      </div>
      <button class="btn btn--primary" onclick="startExam(${exam.id})">Start Exam</button>
    `;
    examsContainer.appendChild(examCard);
  });

  // Render recent results
  const resultsContainer = document.getElementById('recentResults');
  resultsContainer.innerHTML = '';

  recentResults.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    
    let trendSymbol = '';
    if (result.trend === 'up') trendSymbol = '↗';
    else if (result.trend === 'down') trendSymbol = '↘';
    else trendSymbol = '→';

    resultItem.innerHTML = `
      <div class="result-info">
        <h4>${result.subject}</h4>
        <div class="result-date">${result.date}</div>
      </div>
      <div class="result-score">
        ${result.score}%
        <span class="trend-arrow ${result.trend}">${trendSymbol}</span>
      </div>
    `;
    resultsContainer.appendChild(resultItem);
  });
}

// Exam Functions
function startExam(examId) {
  currentExam = sampleExams.find(e => e.id === examId);
  currentQuestionIndex = 0;
  examAnswers = new Array(currentExam.questions).fill(null);
  timeRemaining = currentExam.timeLimit * 60; // Convert to seconds

  showView('examInterface');
  document.getElementById('examTitle').textContent = currentExam.title;
  startExamTimer();
  renderQuestion();
}

function startExamTimer() {
  updateTimerDisplay();
  examTimer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(examTimer);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timerElement = document.getElementById('examTimer');
  timerElement.textContent = `⏱️ ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function renderQuestion() {
  const questions = examQuestions[currentExam.id];
  if (!questions || !questions[currentQuestionIndex]) return;

  const question = questions[currentQuestionIndex];
  
  // Update progress
  document.getElementById('examProgress').textContent = 
    `Question ${currentQuestionIndex + 1} of ${currentExam.questions}`;
  
  const progress = ((currentQuestionIndex + 1) / currentExam.questions) * 100;
  document.getElementById('progressFill').style.width = `${progress}%`;

  // Update question
  document.getElementById('questionText').textContent = question.question;

  // Update options
  const optionsContainer = document.getElementById('questionOptions');
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    if (examAnswers[currentQuestionIndex] === index) {
      optionDiv.classList.add('selected');
    }
    
    optionDiv.innerHTML = `
      <input type="radio" name="answer" value="${index}" 
        ${examAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
      <label>${option}</label>
    `;
    
    optionDiv.onclick = () => selectOption(index);
    optionsContainer.appendChild(optionDiv);
  });

  // Update navigation buttons
  document.getElementById('prevBtn').style.display = 
    currentQuestionIndex === 0 ? 'none' : 'block';
  
  const isLastQuestion = currentQuestionIndex === currentExam.questions - 1;
  document.getElementById('nextBtn').style.display = isLastQuestion ? 'none' : 'block';
  document.getElementById('submitExamBtn').style.display = isLastQuestion ? 'block' : 'none';
}

function selectOption(optionIndex) {
  examAnswers[currentQuestionIndex] = optionIndex;
  renderQuestion();
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < currentExam.questions - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function submitExam() {
  clearInterval(examTimer);
  
  // Calculate score
  const questions = examQuestions[currentExam.id];
  let correctAnswers = 0;
  
  examAnswers.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      correctAnswers++;
    }
  });

  const score = Math.round((correctAnswers / currentExam.questions) * 100);
  
  // Show results
  showResults(score);
}

function showResults(score) {
  showView('resultsPage');
  
  // Display score
  document.getElementById('finalScore').textContent = `${score}%`;
  
  let grade = 'F';
  if (score >= 90) grade = 'A+';
  else if (score >= 85) grade = 'A';
  else if (score >= 80) grade = 'B+';
  else if (score >= 75) grade = 'B';
  else if (score >= 70) grade = 'C+';
  else if (score >= 65) grade = 'C';
  else if (score >= 60) grade = 'D';
  
  document.getElementById('finalGrade').textContent = grade;

  // Subject breakdown
  const subjectBreakdown = document.getElementById('subjectBreakdown');
  subjectBreakdown.innerHTML = `
    <div class="subject-score-item">
      <strong>${currentExam.subject}</strong>
      <span style="font-size: var(--font-size-xl); font-weight: bold; color: var(--color-primary);">${score}%</span>
    </div>
  `;
}

// Teacher Dashboard Functions
function renderTeacherDashboard() {
  const studentList = document.getElementById('studentList');
  studentList.innerHTML = '';

  classStudents.forEach(student => {
    const studentRow = document.createElement('div');
    studentRow.className = 'student-row';
    
    studentRow.innerHTML = `
      <div class="student-name">
        ${student.name}
        ${student.alert ? '<span class="student-alert">⚠️ Needs Attention</span>' : ''}
      </div>
      <div>${student.overall}%</div>
      <div>
        <span class="trend-badge ${student.trend}">
          ${student.trend === 'improving' ? '↗ Improving' : 
            student.trend === 'stable' ? '→ Stable' : '⚠️ Attention'}
        </span>
      </div>
      <div>
        <button class="btn btn--sm btn--outline">View Details</button>
      </div>
    `;
    
    studentList.appendChild(studentRow);
  });
}

// Parent Dashboard Functions
function renderParentDashboard() {
  // Render progress chart
  const ctx = document.getElementById('parentProgressChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Average Score',
          data: [72, 75, 76, 78],
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 60,
            max: 100
          }
        }
      }
    });
  }
}

// Teacher Analytics Functions
function renderTeacherAnalytics() {
  // Performance trends chart
  const trendCtx = document.getElementById('trendChart');
  if (trendCtx) {
    new Chart(trendCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Class Average',
            data: [72, 74, 75, 76],
            borderColor: '#2563eb',
            tension: 0.4
          },
          {
            label: 'Top Performer',
            data: [88, 90, 91, 92],
            borderColor: '#10b981',
            tension: 0.4
          },
          {
            label: 'Struggling Students',
            data: [55, 58, 60, 62],
            borderColor: '#f59e0b',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // Subject-wise performance
  const subjectCtx = document.getElementById('subjectChart');
  if (subjectCtx) {
    new Chart(subjectCtx, {
      type: 'bar',
      data: {
        labels: ['Math', 'Science', 'English', 'Social Studies'],
        datasets: [{
          label: 'Average Score',
          data: [76, 68, 84, 72],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: false,
            min: 50,
            max: 100
          }
        }
      }
    });
  }

  // Distribution chart
  const distCtx = document.getElementById('distributionChart');
  if (distCtx) {
    new Chart(distCtx, {
      type: 'doughnut',
      data: {
        labels: ['Excellent (90+)', 'Good (75-89)', 'Needs Improvement (<75)'],
        datasets: [{
          data: [8, 16, 8],
          backgroundColor: ['#10b981', '#2563eb', '#f59e0b']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Role selection cards
  document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const role = card.getAttribute('data-role');
      setRole(role);
    });
  });

  // Logout button
  document.getElementById('logoutBtn').addEventListener('click', () => {
    currentRole = null;
    showView('landingPage');
  });

  // Exam navigation
  document.getElementById('prevBtn').addEventListener('click', previousQuestion);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('submitExamBtn').addEventListener('click', submitExam);

  // Form handlers
  const questionSlider = document.getElementById('questionSlider');
  if (questionSlider) {
    questionSlider.addEventListener('input', (e) => {
      document.getElementById('questionCount').textContent = e.target.value;
    });
  }

  const examForm = document.getElementById('examForm');
  if (examForm) {
    examForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Show success message
      const successDiv = document.createElement('div');
      successDiv.className = 'success-message';
      successDiv.innerHTML = `
        <h2>✅ Exam Scheduled Successfully!</h2>
        <p>Your exam has been created and scheduled for students.</p>
        <button class="btn btn--primary" onclick="this.parentElement.remove(); document.querySelector('.overlay').remove(); showView('teacherDashboard');">Close</button>
      `;
      
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.onclick = () => {
        successDiv.remove();
        overlay.remove();
      };
      
      document.body.appendChild(overlay);
      document.body.appendChild(successDiv);
    });
  }

  // Export button
  const exportBtn = document.getElementById('exportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const successDiv = document.createElement('div');
      successDiv.className = 'success-message';
      successDiv.innerHTML = `
        <h2>📥 Report Exported!</h2>
        <p>Analytics report has been downloaded successfully.</p>
        <button class="btn btn--primary" onclick="this.parentElement.remove(); document.querySelector('.overlay').remove();">Close</button>
      `;
      
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.onclick = () => {
        successDiv.remove();
        overlay.remove();
      };
      
      document.body.appendChild(overlay);
      document.body.appendChild(successDiv);
    });
  }

  // Observer for when analytics view becomes active
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target.id === 'teacherAnalytics' && 
          mutation.target.classList.contains('active')) {
        setTimeout(() => renderTeacherAnalytics(), 100);
      }
    });
  });

  const analyticsView = document.getElementById('teacherAnalytics');
  if (analyticsView) {
    observer.observe(analyticsView, { attributes: true, attributeFilter: ['class'] });
  }
});