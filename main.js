"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules for handling Vercel deployments and PDFs
var html2pdf_js_1 = require("html2pdf.js");
// Add event listener for DOM loaded
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplay = document.getElementById('resume-display');
    form.addEventListener('submit', function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var name, email, contact, education, school, year, skills, work, personalInfo, educationInfo, skillsInfo, workInfo, username, resumeLink, shareLink, downloadButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault(); // Prevent form from submitting the default way
                    name = document.getElementById('name').value;
                    email = document.getElementById('email').value;
                    contact = document.getElementById('contact').value;
                    education = document.getElementById('education').value;
                    school = document.getElementById('school').value;
                    year = document.getElementById('year').value;
                    skills = document.getElementById('skills').value;
                    work = document.getElementById('work').value;
                    personalInfo = document.getElementById('personal-info');
                    educationInfo = document.getElementById('education-info');
                    skillsInfo = document.getElementById('skills-info');
                    workInfo = document.getElementById('work-info');
                    personalInfo.innerHTML = "\n            <h2>Personal Information</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Contact Number:</strong> ").concat(contact, "</p>\n        ");
                    educationInfo.innerHTML = "\n            <h2>Education</h2>\n            <p><strong>Degree:</strong> ".concat(education, "</p>\n            <p><strong>School/College Name:</strong> ").concat(school, "</p>\n            <p><strong>Graduation Year:</strong> ").concat(year, "</p>\n        ");
                    skillsInfo.innerHTML = "\n            <h2>Skills</h2>\n            <p>".concat(skills, "</p>\n        ");
                    workInfo.innerHTML = "\n            <h2>Work Experience</h2>\n            <p>".concat(work, "</p>\n        ");
                    // Show the generated resume
                    resumeDisplay.style.display = 'block';
                    username = name.toLowerCase().replace(/\s+/g, '-');
                    resumeLink = "https://".concat(username, ".vercel.app/resume");
                    shareLink = document.createElement('p');
                    shareLink.innerHTML = "<strong>Share your resume:</strong> <a href=\"".concat(resumeLink, "\" target=\"_blank\">").concat(resumeLink, "</a>");
                    resumeDisplay.appendChild(shareLink);
                    // Create the resume page and deploy to Vercel (pseudo-code, needs Vercel API integration)
                    return [4 /*yield*/, deployResumeToVercel(username, personalInfo, educationInfo, skillsInfo, workInfo)];
                case 1:
                    // Create the resume page and deploy to Vercel (pseudo-code, needs Vercel API integration)
                    _a.sent();
                    downloadButton = document.createElement('button');
                    downloadButton.textContent = 'Download PDF';
                    resumeDisplay.appendChild(downloadButton);
                    // Download PDF functionality
                    downloadButton.addEventListener('click', function () {
                        var element = document.getElementById('resume-display');
                        var opt = {
                            margin: 1,
                            filename: "".concat(name, "_resume.pdf"),
                            image: { type: 'jpeg', quality: 0.98 },
                            html2canvas: { scale: 2 },
                            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                        };
                        (0, html2pdf_js_1.default)().from(element).set(opt).save();
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    // Function to deploy resume to Vercel (pseudo-code)
    function deployResumeToVercel(username, personalInfo, educationInfo, skillsInfo, workInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var vercelApiEndpoint, deploymentData, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vercelApiEndpoint = 'https://api.vercel.com/v1/deployments';
                        deploymentData = {
                            name: username,
                            files: [
                                {
                                    file: 'index.html',
                                    data: "\n                    <html>\n                    <head><title>".concat(username, "'s Resume</title></head>\n                    <body>\n                    <div>").concat(personalInfo.innerHTML, "</div>\n                    <div>").concat(educationInfo.innerHTML, "</div>\n                    <div>").concat(skillsInfo.innerHTML, "</div>\n                    <div>").concat(workInfo.innerHTML, "</div>\n                    </body>\n                    </html>")
                                }
                            ],
                            target: 'production'
                        };
                        return [4 /*yield*/, fetch(vercelApiEndpoint, {
                                method: 'POST',
                                headers: {
                                    'Authorization': "Bearer YOUR_VERCEL_API_TOKEN",
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(deploymentData)
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log('Deployed URL:', data.url);
                        return [2 /*return*/];
                }
            });
        });
    }
});
