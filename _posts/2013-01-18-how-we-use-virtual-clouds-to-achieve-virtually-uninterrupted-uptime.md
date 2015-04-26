---
layout: post
nid: 1405
author: Wayan Vota
created: 1358517654
old_path: news/how-we-use-virtual-clouds-achieve-virtually-uninterrupted-uptime
title: How We Use Virtual Clouds to Achieve Virtually Uninterrupted Uptime
lede: Computer hardware would be useless without data and programs to process it.
  But to run programs, the computer must know how to do basic tasks like booting up,
  reading user input or loading programs. This is performed by the operating system,
  e.g. Windows, Linux or Mac OS. So when we speak of a computer, we mean the combination
  of hardware, operating system to bring it to life, and software to solve our tasks.
thumbnail: old-files/featured-images/cloud-hi-res.png
thumbnail-fid: "5944"
thumbnail-alt: ""
---

Computer hardware would be useless without data and programs to process it. But to run programs, the computer must know how to do basic tasks like booting up, reading user input or loading programs. This is performed by the *operating system*, e.g. Windows, Linux or Mac OS. So when we speak of a computer, we mean the combination of hardware, operating system to bring it to life, and software to solve our tasks.

For a business, providing fast and reliable services is the primary goal. Therefore, we care much more about applications uptime than about hardware assets. A hardware failure is a common but manageable mishap, but a service outage is a disaster. So we need to separate software and operating system from hardware by some means.

**Virtualization**

Virtualization provides such an intermediary layer. It makes operating system and programs run inside a simulated, or* virtual*, computer. For the software this computer, known as a* virtual machine*, looks and acts exactly like a real one. The system that provides virtualization is called* virtualization platform* and acts as a bridge between actual hardware and virtual machines.

Virtualization allows us to perform fast deployment of software (no need to install more hardware for every project), scale easier (adding more memory or disk space on the fly), utilize resources better (never keeping hardware idle), use snapshots (instantly saving the entire virtual machine state before significant changes). But how does this protect our services from hardware failures?

**Virtual clouds**

To achieve greater flexibility, the virtualization platform can span multiple servers, joining their combined processor power, memory and disk space into* pools*. Such servers form a whole system which is called a* cloud*.

The platform keeps track of the virtual machines in the cloud and allows moving (*migrating*) them between the servers.* Live migration* is performed without stopping the services and is practically unnoticeable. As a result, hardware maintenance will not affect the users. In case of unexpected server failure, the high availability mechanism will instantly restart the virtual machine on the next available server.

Public clouds are operated by companies like Amazon, Microsoft or Rackspace; other companies organize* private clouds* for their own use.

**Our experience**

I'm [Stepan Semenukha](http://www.linkedin.com/in/stepansemenukha), System Administrator at Development Gateway, and I trust in the power of free and open-source software, which can be tailored to one's needs and used without limitations. Cost efficiency and flexibility were the key factors when we designed our private cloud. So our choice was Xen Cloud Platform, a virtualization solution created by Citrix and available in commercial and community editions.

Using cloud virtualization and fault-tolerant hardware design, e.g. redundant fibre optic links, storage controllers and disk arrays, gave excellent results. We haven't had a single significant downtime caused by hardware failures for a year. Deploying new servers running Scientific Linux became a snap with customized virtual machine templates.

Our IT systems became agile, fast and resilient. And we are now always ready for new challenges.
