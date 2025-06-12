
const  English = {
    message: {
        header: {
            name: 'Student Tracker System',
            Search : 'Search',
            ChangeLanguage: 'Change Language:',
            Placeholder: 'Enter a Registration no',
        },
        homeContent: {
            name: 'Student Tracker System',
            showMessage: "Click options in the sidebar to manage students.",
            schoolName: "Kendriya Vidyalaya",
        },
        AddNewStudent: {
            FirstName: '*First Name:',
            LastName: 'Last Name:',
            Standard: '*Standard:',
            Address: '*Address:',
            Mobile: '*Mobile No:',
            Email: '*Email ID:',
            Submit: 'Submit',
            error_firstname_lastname_number: "FirstName or LastName cannot be number",
            error_standard_range:"standard must be between 1 and 12",
            success_student_added: "Student Added Successfully!",
            error_student_add_failed:"Failed to add Student",
        },
        Promote: {
            promote: 'Promote Student',
            InputFieldText: 'Enter a Registration no',
            btnText: 'Promote',
            btnText2: 'TC',
            GenerateTransferCertificate: 'Generate Transfer certificate',
            btntext3: 'Get Details',
            btnText4: 'Graduate',
            success: "Student ID {regNo} promoted successfully!",
            failed: "Failed to promote!"
        },
        ShowAllStudents: {
            StudentInformation: "Student Information",
            RegistrationNo: 'Registration No',
            RollNo: 'Roll No.',
            FirstName: 'First Name',
            LastName: 'Last Name',
            Standard: 'Standard',
            AdmissionDate: 'Admission Date',
            Address: 'Address',
            Mobile: 'Mobile No',
            Email: 'Email ID:',
            Status: 'Status',
            PromoteStudent: 'Promote Student',
            TCGeneration: 'TC Generation',
            generate_tc_title: "Generate Student TC?",
            confirm:"Confirm",
            cancel: "Cancel",
            graduate_student_title: "Graduate Student?",
            promote_student_title: "Promote Student?",
            success_tc_generated: 'Transfer certificate generated for ID {regNo}',
            failed_to_graduate: "Failed to graduate!",
            tc_generated: "TC Generated",
        }, SideBar: {
            Home: 'Home',
            AddStudent: 'Add Student',
            PromoteStudent: 'Promote Student',
            ShowAllStudents:  'Show All Students',
            PromoteNextStd: 'Promote Next Standard',
            GenerateTC:   'Generate TC',
        }
    }
}
export default English;