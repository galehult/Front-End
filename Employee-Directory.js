const employeeRecord = [
    { lastName: "DeCheese", firstName: "Franky", suffix: "", middleName: "Enderson", empCode: "FHR000000001", accessNo: "1", startDate: "20250701", empStatus: "Regular", company: "FrankyDeCheese Company", branch: "Jucy Voyager", division: "FreeMan", department: "FrankyHR", section: "FrankyHR", designation: "Executive", positionLevel: "Executive", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Confi", imgSrc: "/free-assets/Franky.jpg" },
    { lastName: "Outerman", firstName: "Vini", suffix: "I", middleName: "Frederick", empCode: "VCC000000001", accessNo: "2", startDate: "20250701", empStatus: "Regular", company: "Vini Cheese Corporation", branch: "Crystie Miner", division: "FreeMan", department: "InVINtory", section: "InVINtory", designation: "Executive", positionLevel: "Executive", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Confi", imgSrc: "/free-assets/Vini.jpg" },
    { lastName: "Breaker", firstName: "Mike", suffix: "", middleName: "Yves", empCode: "MCR000000001", accessNo: "3", startDate: "20251008", empStatus: "Regular", company: "Mik.E Cheese Resources", branch: "Luiver Vampire", division: "FreeMan", department: "RecruitMike", section: "RecruitMike", designation: "Executive", positionLevel: "Executive", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Confi", imgSrc: "/free-assets/Mikey.jpg" },
    { lastName: "Ashbell", firstName: "John", suffix: "II", middleName: "Mitchell", empCode: "FHR000000002", accessNo: "4", startDate: "20250701", empStatus: "Regular", company: "FrankyDeCheese Company", branch: "Jucy Voyager", division: "FreeMan", department: "FrankyHR", section: "FrankyHR", designation: "Manager", positionLevel: "Managerial", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Confi", imgSrc: "" },
    { lastName: "Fence", firstName: "Jonah", suffix: "", middleName: "Nickel", empCode: "VCC000000002", accessNo: "5", startDate: "20250701", empStatus: "Regular", company: "Vini Cheese Corporation", branch: "Crystie Miner", division: "FreeMan", department: "InVINtory", section: "InVINtory", designation: "Manager", positionLevel: "Managerial", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Confi", imgSrc: "" },
    { lastName: "Stevens", firstName: "Tulip", suffix: "", middleName: "Anne", empCode: "MCR000000002", accessNo: "6", startDate: "20250701", empStatus: "Regular", company: "Mik.E Cheese Resources", branch: "Luiver Vampire", division: "FreeMan", department: "RecruitMike", section: "RecruitMike", designation: "Manager", positionLevel: "Managerial", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Confi", imgSrc: "" },
    { lastName: "Turner", firstName: "Carlyn", suffix: "", middleName: "", empCode: "FHR00000010", accessNo: "10", startDate: "20250702", empStatus: "Regular", company: "FrankyDeCheese Company", branch: "Jucy Voyager", division: "FreeMan", department: "FrankyHR", section: "FrankyHR", designation: "Supervisor", positionLevel: "Supervisory", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Sight", firstName: "Noon", suffix: "", middleName: "Sill", empCode: "VCC000000011", accessNo: "11", startDate: "20250702", empStatus: "Regular", company: "Vini Cheese Corporation", branch: "Crystie Miner", division: "FreeMan", department: "InVINtory", section: "InVINtory", designation: "Supervisor", positionLevel: "Supervisory", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Calderon", firstName: "Riza", suffix: "", middleName: "", empCode: "MCR000000012", accessNo: "12", startDate: "20250702", empStatus: "Regular", company: "Mik.E Cheese Resources", branch: "Luiver Vampire", division: "FreeMan", department: "RecruitMike", section: "RecruitMike", designation: "Supervisor", positionLevel: "Supervisory", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Nievel", firstName: "Zhi", suffix: "", middleName: "Zhi", empCode: "FHR000000013", accessNo: "13", startDate: "20250703", empStatus: "Regular", company: "FrankyDeCheese Company", branch: "Jucy Voyager", division: "FreeMan", department: "FrankyHR", section: "FrankyHR", designation: "UI/UX Designer", positionLevel: "Rank and File", employerType: "Moonlighter", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Ciel", firstName: "Maria", suffix: "", middleName: "", empCode: "VCC000000014", accessNo: "14", startDate: "20250703", empStatus: "Regular", company: "Vini Cheese Corporation", branch: "Crystie Miner", division: "FreeMan", department: "InVINtory", section: "InVINtory", designation: "Project Manager", positionLevel: "Rank and File", employerType: "Moonlighter", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Abartha", firstName: "Marla", suffix: "Jr", middleName: "", empCode: "MCR000000015", accessNo: "15", startDate: "20250703", empStatus: "Regular", company: "Mik.E Cheese Resources", branch: "Luiver Vampire", division: "FreeMan", department: "RecruitMike", section: "RecruitMike", designation: "Front-End Developer", positionLevel: "Rank and File", employerType: "", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Voyager", firstName: "Jucy", suffix: "Jr", middleName: "", empCode: "FHR000000016", accessNo: "16", startDate: "20251016", empStatus: "Regular", company: "FrankyDeCheese Company", branch: "Jucy Voyager", division: "Bonded", department: "FrankyHR", section: "FrankyHR", designation: "Quality Assurance", positionLevel: "Rank and File", employerType: "", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Landers", firstName: "Joey", suffix: "", middleName: "Laurence", empCode: "VCC000000017", accessNo: "17", startDate: "20251027", empStatus: "Regular", company: "Vini Cheese Corporation", branch: "Crystie Miner", division: "Bonded", department: "InVINtory", section: "InVINtory", designation: "Back-End Developer", positionLevel: "Rank and File", employerType: "", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Vasser", firstName: "Pater", suffix: "", middleName: "Luiver", empCode: "MCR00000018", accessNo: "18", startDate: "20251201", empStatus: "Regular", company: "Mik.E Cheese Resources", branch: "Luiver Vampire", division: "Bonded", department: "RecruitMike", section: "RecruitMike", designation: "Project Manager", positionLevel: "Rank and File", employerType: "", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Aquila", firstName: "Cristie", suffix: "", middleName: "Kaitlyn", empCode: "FHR000000019", accessNo: "19", startDate: "20260301", empStatus: "Probationary", company: "FrankyDeCheese Company", branch: "Jucy Voyager", division: "Bonded", department: "FrankyHR", section: "FrankyHR", designation: "Front-End Developer", positionLevel: "Rank and File", employerType: "", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Castle", firstName: "Chica", suffix: "", middleName: "", empCode: "VCC000000020", accessNo: "20", startDate: "20250702", empStatus: "Resigned", company: "Vini Cheese Corporation", branch: "Crystie Miner", division: "FreeMan", department: "InVINtory", section: "InVINtory", designation: "Project Manager", positionLevel: "Managerial", employerType: "Primary", isRequiredToLog: false, isUnion: false, payrollGroup: "Confi", imgSrc: "" },
    { lastName: "Angle", firstName: "Jermie", suffix: "", middleName: "", empCode: "MCR000000021", accessNo: "21", startDate: "20250702", empStatus: "End of Contract", company: "Mik.E Cheese Resources", branch: "Luiver Vampire", division: "FreeMan", department: "RecruitMike", section: "RecruitMike", designation: "Back-End Developer", positionLevel: "Supervisory", employerType: "", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Valderama", firstName: "Wiggle", suffix: "II", middleName: "", empCode: "FHR000000022", accessNo: "22", startDate: "20250916", empStatus: "Terminated", company: "FrankyDeCheese Company", branch: "Jucy Voyager", division: "Bonded", department: "FrankyHR", section: "FrankyHR", designation: "Front-End Developer", positionLevel: "Rank and File", employerType: "Moonlighter", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" },
    { lastName: "Bandle", firstName: "Marx", suffix: "", middleName: "Aldrian", empCode: "VCC000000023", accessNo: "23", startDate: "20250703", empStatus: "Contractual", company: "Vini Cheese Corporation", branch: "Crystie Miner", division: "FreeMan", department: "InVINtory", section: "InVINtory", designation: "UI/UX Designer", positionLevel: "Rank and File", employerType: "Moonlighter", isRequiredToLog: false, isUnion: false, payrollGroup: "Non-Confi", imgSrc: "" }
];
const employeeCardList = document.getElementById("employee-card-list");
const noEmployees = document.getElementById("no-employees");

employeeRecord.sort((a, b) => {
    const lastA = a.lastName.toLowerCase();
    const lastB = b.lastName.toLowerCase();

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;

    const firstA = a.firstName.toLowerCase();
    const firstB = b.firstName.toLowerCase();

    return 0;
});


if (employeeRecord.length <= 0) {
    noEmployees.removeAttribute("hidden");
} else {
    for (const emp of employeeRecord) {
        const employeeCard = document.createElement("div");
        const employeeCardHeader = document.createElement("div");
        const employeeImg = document.createElement("img");
        const headerName = document.createElement("h3");
        const titleName = document.createElement("p");
        const employeeStatus = document.createElement("p");

        employeeCard.classList.add("employee-card");
        employeeCardHeader.classList.add("employee-info");
        employeeImg.classList.add("img", "employee-img");

        if (emp.imgSrc === "") {
            employeeImg.src = "/free-assets/logo.jpg";
        } else {
            employeeImg.src = emp.imgSrc;
        }

        employeeCardHeader.appendChild(employeeImg);

        headerName.classList.add("employee-name");

        if (emp.suffix === "") {
            headerName.textContent = `${emp.lastName}, ${emp.firstName} ${emp.middleName}`;
        } else {
            headerName.textContent = `${emp.lastName}, ${emp.firstName} ${emp.suffix} ${emp.middleName}`;
        }

        employeeCardHeader.appendChild(headerName);

        titleName.classList.add("employee-title");
        titleName.textContent = `${emp.designation}`

        employeeCardHeader.appendChild(titleName);

        employeeStatus.classList.add("employee-status");
        employeeStatus.textContent = `${emp.empStatus}`;

        employeeCardHeader.appendChild(employeeStatus);

        const empDetails = document.createElement("div");
        const codeSection = document.createElement("section");
        const imgCode = document.createElement("img");
        const employeeCode = document.createElement("p");

        empDetails.classList.add("employee-details");
        codeSection.classList.add("emp-sec");
        imgCode.classList.add("img-logo");
        imgCode.src = "#";
        employeeCode.classList.add("emp-det");
        employeeCode.textContent = `${emp.empCode}`;
        codeSection.append(imgCode, employeeCode);

        const accessSection = document.createElement("section");
        const imgAccess = document.createElement("img");
        const accessCode = document.createElement("p");

        accessSection.classList.add("emp-sec");
        imgAccess.classList.add("img-logo");
        imgAccess.src = "#";
        accessCode.classList.add("emp-det");
        accessCode.textContent = `${emp.accessNo}`;
        accessSection.append(imgAccess, accessCode);

        const positionSection = document.createElement("section");
        const imgPos = document.createElement("img");
        const posName = document.createElement("p");

        positionSection.classList.add("emp-sec");
        imgPos.classList.add("img-logo");
        imgPos.src = '#';
        posName.classList.add("emp-det");
        posName.textContent = `${emp.positionLevel}`;
        positionSection.append(imgPos, posName);

        const deptSection = document.createElement("section");
        const imgDept = document.createElement("img");
        const deptName = document.createElement("p");

        deptSection.classList.add("emp-sec");
        imgDept.classList.add("img-logo");
        imgDept.src = '#';
        deptName.classList.add("emp-det");
        deptName.textContent = `${emp.department}`;
        deptSection.append(imgDept, deptName);

        const startSection = document.createElement("section");
        const imgStart = document.createElement("img");
        const startName = document.createElement("p");
        const yearStart = emp.startDate.slice(0,4);
        const monthStart = emp.startDate.slice(4,6);
        const dayStart = emp.startDate.slice(6,8);
        const startDateObj = new Date(yearStart, monthStart - 1, dayStart);
        const dateOptions = { month: 'short', day: '2-digit', year: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(startDateObj);

        startSection.classList.add("emp-sec");
        imgStart.classList.add("img-logo");
        imgStart.src = '#';
        startName.classList.add("emp-det");
        startName.textContent = `${formattedDate}`;
        startSection.append(imgStart, startName);

        empDetails.append(codeSection, accessSection, positionSection, deptSection, startSection);

        employeeCard.append(employeeCardHeader, empDetails);
        employeeCardList.append(employeeCard);
    }
}

const totalEmployeeSpan = document.getElementById("total-employee");

totalEmployeeSpan.innerText = employeeRecord.length;

function employeeSelector(stupidInput) {

    return stupidInput.map((emp) => {
        const {lastName, firstName, suffix, middleName, designation, empStatus, empCode, accessNo, positionLevel, department, startDate, imgSrc } = emp;
        const employeeImg = imgSrc ? imgSrc : "/free-assets/logo.jpg";
        const cardName = suffix ? `${lastName}, ${firstName} ${suffix} ${middleName}` : `${lastName}, ${firstName} ${middleName}`;
            return `<div class="employee-card">
                <div class="employee-info">
                    <img src="${employeeImg}" class="img employee-img">
                    <h3 class="employee-name">${cardName}</h3>
                    <p class="employee-title">${designation}</p>
                    <p class="employee-status">${empStatus}</p>
                </div>
                <div class="employee-details">
                    <section class="emp-sec">
                        <img src="#" class="img-logo>
                        <p class="emp-det>${empCode}</p>
                    </section>
                    <section class="emp-sec">
                        <img src="#" class="img-logo>
                        <p class="emp-det>${accessNo}</p>
                    </section>
                    <section class="emp-sec">
                        <img src="#" class="img-logo>
                        <p class="emp-det>${positionLevel}</p>
                    </section>
                    <section class="emp-sec">
                        <img src="#" class="img-logo>
                        <p class="emp-det>${department}</p>
                    </section>
                    <section class="emp-sec">
                        <img src="#" class="img-logo>
                        <p class="emp-det>${startDate}</p>
                    </section>
                </div>
            </div>`
    }).join("");
};

const selectEmpStatus = document.getElementById("status-selector");

selectEmpStatus.addEventListener("change", (event) => {
    const selectedValue = employeeSelector(event.target.value);

    const selectedPosition = selectedValue === "all"
        ? employeeRecord
        : employeeRecord.filter(
            ({ empStatus }) => empStatus.toLowerCase() === employeePosition.toLowerCase() );

    if (selectedPosition === 0) {
        employeeCardList.innerHTML = "";
        noEmployees.removeAttribute("hidden");
    } else {
        noEmployees.setAttribute("hidden", "true");
        employeeCardList.innerHTML = employeeSelector(selectedPosition);
    }
});
