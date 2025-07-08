import {
  BookOpen,
  Volume2,
  Handshake,
  Presentation,
  Gavel,
  Compass,
  Briefcase,
  CheckSquare,
  Building,
  University,
  Users,
  FileText,
  Clock,
  DollarSign,
  Star,
  Atom,
  List,
  Calendar,
  Shield,
  AlertTriangle,
  BarChart3,
  Lightbulb,
  Video,
  Truck,
  Award,
  TrendingUp
} from 'lucide-react';
 
export const modulesData = [
  {
    id: 'audit-tracker',
    name: 'Audit Tracker',
    description: 'Track and manage audit processes and compliance',
    icon: BookOpen,
    color: '#0a2f6f',
    bgColor: '#e3f2fd',
    href: '/Audit_tracker'
  },
  {
    id: 'speak-up',
    name: 'Speak Up',
    description: 'Employee feedback and communication portal',
    icon: Volume2,
    color: '#ff6b35',
    bgColor: '#fff3e0',
    href: '/speakup'
  },
  {
    id: 'business-development',
    name: 'Business Development',
    description: 'Manage business development tasks and opportunities',
    icon: Handshake,
    color: '#9c27b0',
    bgColor: '#f3e5f5',
    href: '/nbd_taskList'
  },
  {
    id: 'cust-enquiry-tracker',
    name: 'Customer Enquiry Tracker',
    description: 'Track customer enquiries and responses',
    icon: Presentation,
    color: '#00bcd4',
    bgColor: '#e0f2f1',
    href: '/enquiry_list'
  },
  {
    id: 'eaims',
    name: 'eAIMS',
    description: 'Legal workflow management system',
    icon: Gavel,
    color: '#ff9800',
    bgColor: '#fff8e1',
    href: '/task-workflow#/legal-workflow_list'
  },
  {
    id: 'engineering-drawing',
    name: 'Engineering Drawing',
    description: 'Manage engineering drawings and documentation',
    icon: Compass,
    color: '#4caf50',
    bgColor: '#e8f5e8',
    href: '/task-workflow#/engDrawing'
  },
  {
    id: 'expense-process',
    name: 'Expense Process',
    description: 'Track and manage expense processes',
    icon: Briefcase,
    color: '#e91e63',
    bgColor: '#fce4ec',
    href: '/task-workflow#/eprocessList'
  },
  {
    id: 'human-capital',
    name: 'Human Capital',
    description: 'Human resources and capital management',
    icon: Users,
    color: '#795548',
    bgColor: '#efebe9',
    href: '/HumanCapital'
  },
  {
    id: 'insurance-process',
    name: 'Insurance Process',
    description: 'Manage insurance processes and policies',
    icon: Shield,
    color: '#607d8b',
    bgColor: '#eceff1',
    href: '#'
  },
  {
    id: 'litigation-management',
    name: 'Litigation Management',
    description: 'Manage legal litigation cases',
    icon: University,
    color: '#2e7d32',
    bgColor: '#e8f5e8',
    href: '/litigation-epp#/litigation-main'
  },
  {
    id: 'major-cust-develop',
    name: 'Major Customer Development',
    description: 'Major customer development processes',
    icon: Star,
    color: '#1976d2',
    bgColor: '#e3f2fd',
    href: '/major_dev_process'
  },
  {
    id: 'notable-events',
    name: 'Notable Events',
    description: 'Track and manage notable business events',
    icon: FileText,
    color: '#8bc34a',
    bgColor: '#f1f8e9',
    href: '#'
  },
  {
    id: 'overtime-process',
    name: 'Overtime Process',
    description: 'Manage overtime tracking and approvals',
    icon: Clock,
    color: '#ff5722',
    bgColor: '#fff3e0',
    href: '/ot_main'
  },
  {
    id: 'pricing-tool',
    name: 'Pricing Tool',
    description: 'Product and service pricing management',
    icon: DollarSign,
    color: '#673ab7',
    bgColor: '#f3e5f5',
    href: '/pricing_main'
  },
  {
    id: 'phoenix-process',
    name: 'Phoenix Process',
    description: 'Phoenix project management workflow',
    icon: TrendingUp,
    color: '#009688',
    bgColor: '#e0f2f1',
    href: '/phoenix-project-list'
  },
    {
    id: 'sdd-module',
    name: 'SDD Module',
    description: 'System Design Document management',
    icon: Volume2,
    color: '#7ac943',
    bgColor: '#f1f8e9',
    href: '/sddmodule'
  },
  {
    id: 'pi-evaluation',
    name: 'PI Evaluation',
    description: 'Performance indicator evaluation system',
    icon: BarChart3,
    color: '#ffc107',
    bgColor: '#fff8e1',
    href: '/PI_evaluation'
  },
  {
    id: 'quality-process',
    name: 'Quality Process',
    description: 'Quality management and control processes',
    icon: Atom,
    color: '#4caf50',
    bgColor: '#e8f5e8',
    href: '/quality_main'
  },
  {
    id: 'query-resolution',
    name: 'Query Resolution',
    description: 'Handle and resolve customer queries',
    icon: AlertTriangle,
    color: '#f44336',
    bgColor: '#fce4ec',
    href: '/query_resolution'
  },
  {
    id: 'tasklist',
    name: 'Tasklist',
    description: 'Manage tasks and workflow assignments',
    icon: CheckSquare,
    color: '#795548',
    bgColor: '#efebe9',
    href: 'task-workflow#/listTask'
  },
  {
    id: 'meeting-management',
    name: 'Meeting Management',
    description: 'Schedule and manage meetings',
    icon: Calendar,
    color: '#607d8b',
    bgColor: '#eceff1',
    href: '/meet-SOP'
  },
  {
    id: 'monthly-activities',
    name: 'Monthly Activities',
    description: 'Track monthly business activities',
    icon: Calendar,
    color: '#2e7d32',
    bgColor: '#e8f5e8',
    href: '/mainAccountpg'
  },
  {
    id: 'safety-portal',
    name: 'Safety Portal',
    description: 'Workplace safety management system',
    icon: Shield,
    color: '#3f51b5',
    bgColor: '#e3f2fd',
    href: '/Home'
  },
  {
    id: 'customer-complaint',
    name: 'Customer Complaint',
    description: 'Handle customer complaints and feedback',
    icon: AlertTriangle,
    color: '#ff9800',
    bgColor: '#fff8e1',
    href: '/Customer_Complaint'
  },
  {
    id: 'atr-portal',
    name: 'ATR Portal',
    description: 'Action Taken Report portal',
    icon: FileText,
    color: '#9c27b0',
    bgColor: '#f3e5f5',
    href: '/dashboard'
  },
  {
    id: 'project-initiation',
    name: 'Project Initiation',
    description: 'Initialize and setup new projects',
    icon: Star,
    color: '#00bcd4',
    bgColor: '#e0f2f1',
    href: '/project_initiation'
  },
  {
    id: 'vendor-management',
    name: 'Vendor Management',
    description: 'Manage vendor relationships and contracts',
    icon: Truck,
    color: '#ff6b35',
    bgColor: '#fff3e0',
    href: '/vendor_form'
  },
  {
    id: 'work-completion',
    name: 'Work Completion Certificate',
    description: 'Generate work completion certificates',
    icon: Award,
    color: '#7ac943',
    bgColor: '#f1f8e9',
    href: '/work_complation'
  },
  {
    id: 'npd-tracking',
    name: 'NPD Tracking Tool',
    description: 'New Product Development tracking',
    icon: Lightbulb,
    color: '#e91e63',
    bgColor: '#fce4ec',
    href: '/npdtrack'
  },
  {
    id: 'idea-portal',
    name: 'War On Waste - Idea Portal',
    description: 'Submit and track waste reduction ideas',
    icon: Lightbulb,
    color: '#795548',
    bgColor: '#efebe9',
    href: '/idea_discussion_list'
  },
  {
    id: 'corporate-videos',
    name: 'Corporate Videos',
    description: 'Access corporate training videos',
    icon: Video,
    color: '#607d8b',
    bgColor: '#eceff1',
    href: '/video'
  }
];
 
 